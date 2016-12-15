import template from './albums-search.html';

export const AlbumsSearchComponent = {
  bindings: {
    onSearch: '&'
  },
  template,
  controller: class AlbumsSearchComponent {

    constructor() {
      this.albumToSearch = '';
    }
    
    search() {
      this.onSearch({
        $event: {
          albumToSearch: this.albumToSearch
        }
      });
    }
  }
};