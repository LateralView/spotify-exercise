export class AlbumsService {
  constructor($q, $http) {
    'ngInject;'
    this.$q = $q;
    this.$http = $http;
    this.baseUrl = '/search?q=';
  }
  
  getAlbums(albumName) {
    let finalAlbumName = albumName.replace(/ /g, '+');
    let queryUrl = this.baseUrl + finalAlbumName;
    let deferred = this.$q.defer();

    this.$http.get(queryUrl)
      .success((response) => deferred.resolve(response)) 
      .error((response) => deferred.reject(response));

    return deferred.promise;
  }
}