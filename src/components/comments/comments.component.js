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
      console.log('COMMENTS-COMPONENT: constructor');
      'ngInject';
      this.commentsService = CommentsService;
      this.comments = [];
      this.isAddingComment = false;
    }
    
    $onInit() {
      console.log('COMMENTS-COMPONENT: $onInit'); 
      this.loadComments();
    }
    
    loadComments() {
      console.log('COMMENTS-COMPONENT: loadComments'); 
      this.commentsService.getComments(this.albumId).then((response) => {
        this.comments = response;
      }); 
    }

    startAddingComment() {
      console.log('COMMENTS-COMPONENT: startAddingComment');
      this.isAddingComment = true;
    }

    cancelAddingComment() {
      console.log('COMMENTS-COMPONENT: cancelAddingComment');
      this.isAddingComment = false;
    }

    finishAddingComment({ comment }) {
      console.log('COMMENTS-COMPONENT: finishAddingComment');
      let newComment = Object.assign({ albumId: this.albumId }, comment);
      this.isAddingComment = false;
      this.commentsService.putComment(newComment);
      this.loadComments();
    }
  }
};
