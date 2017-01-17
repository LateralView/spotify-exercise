import template from './albums.html';
import { AlbumsListComponent} from './albums-list/albums-list.component.js';
import { AlbumsSearchComponent} from './albums-search/albums-search.component.js';

export const AlbumsComponent = {
  template,
  controller: class AlbumsComponent {
    
    constructor(AlbumsService) {
      'ngInject';
      this.albumsService = AlbumsService;
      this.albums = [];
    }

    search({ albumToSearch }) {
      this.albumsService.getAlbums(albumToSearch)
        .then((response) => this.albums = response.albums.items);
    }
  }
};