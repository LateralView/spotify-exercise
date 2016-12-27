class AlbumListService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  getByName(name) {
    return this.$http.get('/search', {
      params: {q: name}
    });
  }
}

export default AlbumListService;
