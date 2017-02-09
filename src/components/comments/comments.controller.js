export default class CommentsComponent{
  constructor(CommentService, $stateParams, $state){
    'ngInject';
    this.$state = $state;
    this.CommentService = CommentService;	
    this.albumId = $stateParams.albumId;
  }

  $onInit(){
    this.enableNewComment = false;
    this.comments = [];
    this.album = {};
    this.getAlbumById();
    this.getComments();
  }

  toggleNewComment(){
    this.enableNewComment = !this.enableNewComment;
  }

  addComment({comment}){
    this.CommentService.postNewComment(comment).then(response => { 
      this.enableNewComment = false;
      this.getComments();
    });
  }

  getAlbumById(){
    this.CommentService.getAlbumById(this.albumId).then(response => { this.album = response.data });
  }

  getComments(){
    this.CommentService.getCommentsByAlbumId(this.albumId).then(response => { this.comments = response.data });
  }

  search({album}){
    this.$state.go('album', { albumName: album });
  }

  itemSelected($event){
    console.log($event.album.name);
    this.$state.go('album', { 
      q: $event.album.name
    });
  }
}