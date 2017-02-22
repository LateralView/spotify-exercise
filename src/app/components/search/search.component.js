import template from './search.template.html';

export const SearchComponent = {
  template: template,
  controller: class SearchComponent {
    constructor(SearchService) {
      'ngInject';
      this.SearchService = SearchService;
    }
    $onInit() {
      this.albumList = [];
      this.showResults = false;
      this.showComments = false;
      this.albumId = '';
    }

    showMoreAlbums() {
      this.SearchService.getAlbums(this.albumsData.next).then((response) => {
        this.albumList = this.albumList.concat(response.albums.items);
        this.albumsData = response.data.albums;
      });
    }


    setAlbums(response) {
      this.albumsData = response.albums;
      this.albumList = this.albumsData.items;
      this.showResults = true;
    }

    search() {
      this.SearchService.getAlbums('/search?q=' + this.albumName).then((response) => {
        this.setAlbums(response);
      });
    }

    onShowResults() {
      this.showResults = true;
      this.showComments = false;
    }

    onShowComments($event) {
      this.album = $event.album;
      this.showResults = false;
      this.showComments = true;
    }

  }
};