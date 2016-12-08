import template from './albums-search.html';

export const AlbumsSearchComponent = {
  bindings: {
    onSearch: '&'
  },
  template,
  controller: class AlbumsSearchComponent {
    
    search() {
      this.onSearch();
    }
  }
};