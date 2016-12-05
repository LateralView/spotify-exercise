export class CommentsService {
  constructor($http) {
    console.log('COMMENTS-SERVICE: constructor');
    'ngInject;'
    this.$http = $http;
  }
  
  getComments(albumId) {
    console.log('COMMENTS-SERVICE: getComments');
    let queryUrl = '/comments/' + albumId;
    return this.$http.get(queryUrl).then(response => response.data);
  }

  putComment(comment) {
    console.log('COMMENTS-SERVICE: putComment');
    let queryUrl = '/comments';
    /*
    if(!comment) {
      console.log('NO COMMENT!!')
      comment = {
        albumId: "1FHM9mqE3ZZlLfsbwKS8FS",
        email: "hernan_amarillo@live.com.ar",
        text: "blabla"
      }
    }
    */
    return this.$http.post(queryUrl, comment).then(response => response.data);
  }
}