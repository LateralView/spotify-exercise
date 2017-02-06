import template from './comments-new.html';

export const CommentsNewComponent = {
	template,
	bindings: {
		addComment: '&',
		albumId: '<'
	},
	controller: class CommentsNewComponent{
		constructor(){}

		$onInit(){
			this.email = '';
			this.text = '';
		}

		newComment(){
			if(this.email && this.text){
				let newComment = {
				  albumId: this.albumId,
				  email: this.email,
				  text: this.text
				};

				this.addComment({ $event: { comment: newComment } });

				this.cleanFields();
			}
		}

		cleanFields(){
			this.email = '';
			this.text = '';
		}
	}
}