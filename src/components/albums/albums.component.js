import template from './albums.html';
import { AlbumsListComponent} from './albums-list/albums-list.component.js';
import { AlbumsSearchComponent} from './albums-search/albums-search.component.js';

export const AlbumsComponent = {
  template,
  controller: class AlbumsComponent {
    
    constructor(AlbumsService) {
      console.log('ALBUMS-COMPONENT: constructor');
      'ngInject';
      this.albumsService = AlbumsService;
      this.albumToSearch = 'rata';
      this.albums = [];
      this.search();
    }
    
    $onInit() {
      console.log('ALBUMS-COMPONENT: $onInit');    
    }

    search() {
      console.log('ALBUMS-COMPONENT: search');
      this.albumsService.getAlbums(this.albumToSearch).then((response) => {
        console.log('RESPONSE:', response);
        this.albums = response.albums.items;
      }); 
    }
  }
};