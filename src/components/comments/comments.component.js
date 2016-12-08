import template from './comments.html';
import { CommentsHeaderComponent} from './comments-header/comments-header.component.js';
import { CommentsFormComponent} from './comments-form/comments-form.component.js';
import { CommentsListComponent} from './comments-list/comments-list.component.js';

export const CommentsComponent = {
  bindings: {
    albumId: '<'
  },
  template,
  controller: class CommentsComponent {
    constructor(CommentsService) {
      'ngInject';
      this.commentsService = CommentsService;
      this.comments = [];
      this.isAddingComment = false;
    }
    
    $onInit() { 
      this.loadComments();
    }
    
    loadComments() { 
      this.commentsService.getComments(this.albumId).then((response) => {
        this.comments = response;
      }); 
    }

    startAddingComment() {
      this.isAddingComment = true;
    }

    cancelAddingComment() {
      this.isAddingComment = false;
    }

    finishAddingComment({ comment }) {
      let newComment = Object.assign({ albumId: this.albumId }, comment);
      this.isAddingComment = false;
      this.commentsService.putComment(newComment);
      this.loadComments();
    }
  }
};
