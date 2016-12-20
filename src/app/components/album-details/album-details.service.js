export class AlbumDetailsService {
  constructor($http) {
    'ngInject;'
    this.$http = $http;
  }
  
  getAlbum(id) {
    return this.$http.get(`/album/${id}`).then(response => response.data);
  }
  
  getComments(id) {
    return this.$http.get(`/comments/${id}`).then(response => response.data);
  }
  
  addComment(comment) {
    return this.$http.post("/comments", comment).then(response => response.data);
  }
}