import template from './album-item.template.html';

export const AlbumItemComponent = {
  bindings: {
    albumItem: '<',
    showingComments: '<',
    onShowResults: '&',
    onShowComments: '&'

  },
  template: template,
  controller: class AlbumItemComponent {
    constructor(EventEmitter) {
      'ngInject';
      this.EventEmitter = EventEmitter;
    }

    showComments() {
      this.onShowComments(
        this.EventEmitter({ album: this.albumItem })
      )
    }

    showResults() {
      this.onShowResults(
        this.EventEmitter()
      )
    }


  }
};