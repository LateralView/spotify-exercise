import template from './albums-list.html';
import { AlbumsListItemComponent} from './albums-list-item/albums-list-item.component.js';

export const AlbumsListComponent = {
  bindings: {
    albums: '<'
  },
  template,
  controller: class AlbumsListComponent {
    
    constructor() {
      console.log('ALBUMS-LIST-COMPONENT: constructor');
      console.log('ALBUMS in LIST:', this.albums);
    }
    
    $onInit() {
      console.log('ALBUMS-LIST-COMPONENT: $onInit');    
    }
  }
};