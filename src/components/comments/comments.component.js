import template from './comments.html';

export const CommentsComponent = {
	template,
	controller: class CommentsComponent{
		constructor(AlbumService, $stateParams, $state){
			'ngInject';
			this.state = $state;
			this.albumService = AlbumService;			
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
			this.albumService.postNewComment(comment).then(response => { 
				this.getComments();
			 });
		}

		getAlbumById(){
			this.albumService.getAlbumById(this.albumId).then(response => { this.album = response.data });
		}

		getComments(){
			this.albumService.getCommentsByAlbumId(this.albumId).then(response => { this.comments = response.data });
		}

		search({album}){
			this.state.go('album', { albumName: album });
		}
	}
}

