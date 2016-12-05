import template from './comments-list-item.html';

export const CommentsListItemComponent = {
  bindings: {
    comment: '<'
  },
  template,
  controller: class CommentsListItemComponent {
    
    constructor() {
      console.log('COMMENTS-LIST-ITEM-COMPONENT: constructor');
    }
    
    $onInit() {
      console.log('COMMENTS-LIST-ITEM-COMPONENT: $onInit');    
    }
  }
};