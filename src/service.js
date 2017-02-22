export default class SpotifyService {
  constructor ($http) {
    this.$http = $http;
    this.data = { id : '' };
    this.url="http://localhost:3000";
  }

  search (term) {
    return this.$http.get(this.url+`/search?q=${term}`).then(response => response.data)
  }
  getAlbum (albumId) {
    return this.$http.get(this.url+`/album/${albumId}`).then(response => response.data)
  }
  getComments(albumId) {
    return this.$http.get(this.url+`/comments/${albumId}`).then(response => response.data)
  }
  addComment(data) {
    return this.$http.post(this.url+"/comments/",data).then(response => response.data)
  }
}
