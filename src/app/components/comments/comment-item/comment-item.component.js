import template from './comment-item.template.html';

export const CommentItemComponent = {
  bindings: {
    commentItem: '<',
    newComment: '<',
    onAddComment: '&'
  },
  template: template,
  controller: class CommentItemComponent {
    constructor(EventEmitter) {
      'ngInject';
      this.EventEmitter = EventEmitter;
    }

    addComment() {
      this.onAddComment(
        this.EventEmitter({
          comment: this.comment
        })
      )
    }
  }
};