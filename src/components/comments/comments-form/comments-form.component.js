import template from './comments-form.html';

export const CommentsFormComponent = {
  bindings: {
    onFinishAddingComment: '&'
  },
  template,
  controller: class CommentsFormComponent {
    
    constructor() {
      this.newComment = {
        email: '',
        text: ''
      };
    }

    submit() {
 
      if (this.newComment.email && this.newComment.text) {
        this.onFinishAddingComment({
          $event: {
            comment: this.newComment
          }
        });
      }
    }
  }
};