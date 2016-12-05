import template from './comments-form.html';

export const CommentsFormComponent = {
  bindings: {
    comment: '<'
  },
  template,
  controller: class CommentsFormComponent {
    
    constructor() {
      console.log('COMMENTS-FORM-COMPONENT: constructor');
    }
    
    $onInit() {
      console.log('COMMENTS-FORM-COMPONENT: $onInit');    
    }
  }
};