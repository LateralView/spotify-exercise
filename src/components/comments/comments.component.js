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
      this.commentsTotal = 0;
      this.commentsLimit = 0;
      this.isAddingComment = false;
    }
    
    $onInit() {
      console.log('COMMENTS-COMPONENT: $onInit'); 
      console.log('ALBUM-ID:', this.albumId);
      this.loadComments();
    }
    
    loadComments() {
      console.log('COMMENTS-COMPONENT: loadComments'); 
      this.commentsService.getComments(this.albumId).then((response) => {
        console.log('RESPONSE:', response);
        this.comments = response;
        this.commentsTotal = response.length;
      }); 
    }

    startAddingComment(event) {
      console.log('COMMENTS-COMPONENT: startAddingComment');
      console.log('COMMENTS-COMPONENT: startAddingComment -> EVENT:', event);
      this.isAddingComment = true;
    }

    cancelAddingComment(event) {
      console.log('COMMENTS-COMPONENT: cancelAddingComment');
      console.log('COMMENTS-COMPONENT: cancelAddingComment -> EVENT:', event);
      this.isAddingComment = false;
    }
  }
};
    /*
    
    */

    /*
      this.newTodo = {
        title: '',
        selected: false
      };
      this.todos = [];
      this.todoService.getTodos().then(response => this.todos = response);

    addTodo({ todo }) {
      if (!todo) return;
      this.todos.unshift(todo);
      this.newTodo = {
        title: '',
        selected: false
      };
    }
    */

