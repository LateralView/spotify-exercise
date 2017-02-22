import template from './comments.template.html';

export const CommentsComponent = {
  bindings: {
    album: '<',
    onShowResults: '&'
  },
  template: template,
  controller: class CommentsComponent {
    constructor(EventEmitter, CommentsService) {
      'ngInject';
      this.CommentsService = CommentsService;
      this.EventEmitter = EventEmitter;
    }
    $onInit() {
      this.comments = [];
      this.showNewComment = false;
      this.CommentsService.getComments(this.album.id).then((response) => {
        this.comments = response;
      });
    }

    showResults() {
      this.onShowResults(
        this.EventEmitter()
      )
    }



    addComment($event) {
      this.CommentsService.postComment({
        text: $event.comment.text,
        email: $event.comment.email,
        albumId: this.album.id
      }).then((response) => {
        this.comments.push(response);
        this.showNewComment = false;
      });
    }

    newComment() {
      this.showNewComment = true;
    }

    cancel() {
      this.showNewComment = false;
    }
  }
};