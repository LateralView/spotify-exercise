export class CommentsService {
  constructor($http) {
    console.log('COMMENTS-SERVICE: constructor');
    'ngInject;'
    this.$http = $http;
  }
  
  getComments(albumId) {
    console.log('COMMENTS-SERVICE: getComments');
    let query = '/comments/:' + albumId;
    return this.$http({
      method: 'GET',
      url: query
    }).then(response => response.data);
  }
}