export class SearchService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }
  getAlbums(api) {
    return this.$http.get(api).then(response => response.data);
  }
}