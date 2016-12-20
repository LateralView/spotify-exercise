export class AlbumDetailsService {
  constructor($http) {
    'ngInject;'
    this.$http = $http;
  }
  
  getAlbum(id) {
    return this.$http.get(`/album/${id}`)
            .then(response => response.data)
            .catch(error => { throw error });
  }
  
  getComments(id) {
    return this.$http.get(`/comments/${id}`)
            .then(response => response.data)
            .catch(error => { throw error });
  }
  
  addComment(comment) {
    return this.$http.post("/comments", comment)
            .then(response => response.data)
            .catch(error => { throw error });
  }
}