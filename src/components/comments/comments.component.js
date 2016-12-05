import template from './comments.html';

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
    }
    
    $onInit() {
      console.log('COMMENTS-COMPONENT: $onInit'); 
      console.log('ALBUM-ID:', this.albumId);
      this.load();
    }
    
    load() {
      console.log('COMMENTS-COMPONENT: load'); 
      this.commentsService.getComments(this.albumId).then((response) => {
        console.log('RESPONSE:', response);
        //this.comments = response.comments.items;
        //this.commentsTotal = response.comments.total;
        //this.commentsLimit = response.comments.limit;
      }); 
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

