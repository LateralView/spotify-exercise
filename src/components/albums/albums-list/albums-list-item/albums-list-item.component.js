import template from './albums-list-item.html';
import { CommentsComponent} from '../../../comments/comments.component.js';

export const AlbumsListItemComponent = {
  bindings: {
    album: '<'
  },
  template,
  controller: class AlbumsListItemComponent {
    
    constructor() {
      console.log('ALBUMS-LIST-ITEM-COMPONENT: constructor');
      this.isWatchingComment = false;
    }
    
    $onInit() {
      console.log('ALBUMS-LIST-ITEM-COMPONENT: $onInit');    
    }

    switchComment() {
      this.isWatchingComment = !this.isWatchingComment;
    }
  }
};