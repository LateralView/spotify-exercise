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
    
    startAddingComment() {
      console.log('COMMENTS-HEADER-COMPONENT: startAddingComment'); 
      this.onStartAddingComment({
        $event: {
          eventName: "START-ADDING-COMMENT"
        }
      });
    }

    cancelAddingComment() {
      console.log('COMMENTS-HEADER-COMPONENT: cancelAddingComment');
      //this.onCancelAddingComment();
    }
    
  }
};