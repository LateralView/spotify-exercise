export class AlbumsService {
  constructor($http) {
    console.log('ALBUMS-SERVICE: constructor');
    'ngInject;'
    this.$http = $http;
  }
  
  getAlbums(albumName) {
    console.log('ALBUMS-SERVICE: getAlbums');
    let finalAlbumName = albumName.replace(/ /g, '+');
    let query = '/search?q=' + finalAlbumName;
    return this.$http({
      method: 'GET',
      url: query
    }).then(response => response.data);
  }
}