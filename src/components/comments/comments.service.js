export class CommentsService {
  constructor($http) {
    'ngInject;'
    this.$http = $http;
  }
  
  getComments(albumId) {
    let queryUrl = '/comments/' + albumId;
    return this.$http.get(queryUrl).then(response => response.data);
  }

  putComment(comment) {
    let queryUrl = '/comments';
    return this.$http.post(queryUrl, comment).then(response => response.data);
  }
}