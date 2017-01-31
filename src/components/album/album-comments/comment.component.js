import template from './comment.html';

export const CommentComponent = {
	template,
	bindings: {
		albumId: '<'
	},
	controller: class CommentComponent{
		constructor(AlbumService){
			'ngInject';
			this.albumService = AlbumService;
			this.comments;
			this.enableNewComment = false;
		}

		$onInit(){
			this.getComments();
		}

		toggleNewComment(){
			this.enableNewComment = !this.enableNewComment;
		}

		getComments(){
			this.albumService.getCommentsByAlbumId(this.albumId).then(response => {
				this.comments = response.data;
			});
		}

		addComment({comment}){
			comment.albumId = this.albumId;
			this.albumService.postNewComment(comment).then(response => {this.getComments()});
		}
	}
}