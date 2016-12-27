class AlbumListService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  getAlbumsByName(name) {
    return this.$http.get('/search', {
      params: {q: name}
    });
  }

  getCommentsInAlbum(albumId) {
    return this.$http.get('/comments/' + albumId);
  }
}

export default AlbumListService;
