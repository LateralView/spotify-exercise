export default class CommentService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getAlbumById(id) {
    return this.$http.get(`/album/${id}`);
  }

  getCommentsByAlbumId(id){
    return this.$http.get(`/comments/${id}`);
  }

  postNewComment(comment){
    return this.$http.post('/comments', comment);
  }
}