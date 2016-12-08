import template from './comments-header.html';

export const CommentsHeaderComponent = {
  bindings: {
    addingComment: '<',
    onStartAddingComment: '&',
    onCancelAddingComment: '&'
  },
  template,
  controller: class CommentsHeaderComponent {
    
    startAdding() { 
      this.onStartAddingComment();
    }

    cancelAdding() {
      this.onCancelAddingComment();
    }
  }
};