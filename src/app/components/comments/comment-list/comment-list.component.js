import template from './comment-list.template.html';

export const CommentListComponent = {
  bindings: {
    commentList: '<'
  },
  template: template,
  controller: class CommentListComponent {
    constructor() {
      'ngInject';
    }

  }
};