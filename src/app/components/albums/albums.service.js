export class AlbumsService {
  constructor($http) {
    'ngInject;'
    this.$http = $http;
  }
  
  getAlbums(query) {
    return this.$http.get(`/search?q=${query}`)
    		.then(response => response.data)
    		.catch(error => { throw error });
  }
}