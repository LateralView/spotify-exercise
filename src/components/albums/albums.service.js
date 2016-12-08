export class AlbumsService {
  constructor($http) {
    'ngInject;'
    this.$http = $http;
  }
  
  getAlbums(albumName) {
    let finalAlbumName = albumName.replace(/ /g, '+');
    let query = '/search?q=' + finalAlbumName;
    return this.$http({
      method: 'GET',
      url: query
    }).then(response => response.data);
  }
}