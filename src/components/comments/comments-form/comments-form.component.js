import template from './comments-form.html';

export const CommentsFormComponent = {
  bindings: {
    onFinishAddingComment: '&'
  },
  template,
  controller: class CommentsFormComponent {
    
    constructor() {
      console.log('COMMENTS-FORM-COMPONENT: constructor');
      this.newComment = {
        email: '',
        text: ''
      };
    }
    
    $onInit() {
      console.log('COMMENTS-FORM-COMPONENT: $onInit');    
    }

    submit() {
      console.log('COMMENTS-FORM-COMPONENT: submit'); 
      if (this.newComment.email && this.newComment.text) {
        console.log('COMENTARIO RECIENTE:', this.newComment);
        this.onFinishAddingComment({
          $event: {
            comment: this.newComment
          }
        });
      }
    }
  }
};