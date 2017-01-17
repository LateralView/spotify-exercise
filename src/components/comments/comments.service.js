export class CommentsService {
  constructor($q, $http) {
    'ngInject;'
    this.$q = $q;
    this.$http = $http;
    this.baseUrl = '/comments/';
  }
  
  getComments(albumId) {
    let queryUrl =  this.baseUrl + albumId;
    let deferred = this.$q.defer();

    this.$http.get(queryUrl)
      .success((response) => deferred.resolve(response))
      .error((response) => deferred.reject(response));

    return deferred.promise;
  }

  putComment(comment) {
    let queryUrl = this.baseUrl;
    let deferred = this.$q.defer();

    this.$http.post(queryUrl, comment)
      .success((response) => deferred.resolve(response))
      .error((response) => deferred.reject(response));

    return deferred.promise;
  }
}