import template from './albums-search.html';

export const AlbumsSearchComponent = {
  bindings: {
    onSearch: '&'
  },
  template,
  controller: class AlbumsSearchComponent {
    
    constructor() {
      console.log('ALBUMS-SEARCH-COMPONENT: constructor');
    }
    
    $onInit() {
      console.log('ALBUMS-SEARCH-COMPONENT: $onInit');    
    }

    search() {
      console.log('ALBUMS-SEARCH-COMPONENT: search');
      this.onSearch();
    }
  }
};