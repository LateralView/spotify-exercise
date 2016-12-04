export class AlbumsService {
  constructor($http) {
    'ngInject;'
    this.$http = $http;
  }
  
  getAlbums(query) {
    let finalQuery = query.replace(/ /g, '+');
    //let finalQuery = query.split(' ').join('+');
    console.log('QUERY:', query);
    console.log('FINAL-QUERY:', finalQuery);
    return this.$http.get('/search?q='+ finalQuery).then(response => response.data);
  }
}