import template from './album-list.template.html';

export const AlbumListComponent = {
  bindings: {
    albumList: '<',
    onShowComments: '&'
  },
  template: template,
  controller: class AlbumListComponent {
    constructor(EventEmitter) {
      'ngInject';
      this.EventEmitter = EventEmitter;
    }

    showComments($event) {
      this.onShowComments(
        this.EventEmitter({ album: $event.album })
      )
    }
  }
};