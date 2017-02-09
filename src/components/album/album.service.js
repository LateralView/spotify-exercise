export class AlbumService{
  
  constructor($http){
    'ngInject';
    this.$http = $http;
  }

  getAlbumsByName(albumName) {
    return this.$http.get('/search', {
      params:{
        q: albumName
      }
    });
  }
}

