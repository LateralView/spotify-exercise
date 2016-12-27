class AlbumListComponent {
  constructor(AlbumListService) {
    'ngInject';

    this.AlbumListService = AlbumListService;
  }

  $onInit() {
    this.albums = [];
  }

  doSearch(event) {
    this.AlbumListService.getAlbumsByName(event.search)
    .then((response) => {
      this.albums = response.data.albums.items;
    });
  }

  viewComments(event) {
    this.AlbumListService.getCommentsInAlbum(event.album.id);
  }
}

export default AlbumListComponent;
