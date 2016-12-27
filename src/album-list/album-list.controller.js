class AlbumListComponent {
  constructor(AlbumListService) {
    'ngInject';

    this.AlbumListService = AlbumListService;
  }

  $onInit() {
    this.albums = [];
  }

  doSearch(event) {
    this.AlbumListService.getByName(event.search)
    .then((response) => {
      this.albums = response.data.albums.items;
    });
  }
}

export default AlbumListComponent;
