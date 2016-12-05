import template from './comments-header.html';

export const CommentsHeaderComponent = {
  bindings: {
    addingComment: '<',
    onStartAddingComment: '&',
    onCancelAddingComment: '&'
  },
  template,
  controller: class CommentsHeaderComponent {
    
    constructor() {
      console.log('COMMENTS-HEADER-COMPONENT: constructor');
    }
    
    $onInit() {
      console.log('COMMENTS-HEADER-COMPONENT: $onInit');    
    }
    
    startAdding() {
      console.log('COMMENTS-HEADER-COMPONENT: startAddingComment'); 
      this.onStartAddingComment();
    }

    cancelAdding() {
      console.log('COMMENTS-HEADER-COMPONENT: cancelAddingComment');
      this.onCancelAddingComment();
    }
    
  }
};