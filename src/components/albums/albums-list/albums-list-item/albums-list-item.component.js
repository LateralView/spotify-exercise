import template from './albums-list-item.html';
import { CommentsComponent} from '../../../comments/comments.component.js';

export const AlbumsListItemComponent = {
  bindings: {
    album: '<'
  },
  template,
  controller: class AlbumsListItemComponent {
    
    constructor() {
      this.isWatchingComment = false;
    }

    switchComment() {
      this.isWatchingComment = !this.isWatchingComment;
    }
  }
};