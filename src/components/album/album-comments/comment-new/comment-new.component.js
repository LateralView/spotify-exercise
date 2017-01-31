import template from './comment-new.html';

export const CommentNewComponent = {
	template,
	bindings: {
		addComment: '&'
	},
	controller: class CommentNewComponent{
		constructor(){
			this.email = '';
			this.text = '';
		}

		newComment(){
			if(this.email && this.text.length){
				let newComment = {
				  albumId: '',
				  email: this.email,
				  text: this.text,
				  avatar: '',
				};

				this.addComment({ $event: { comment: newComment } });
			}
		}
	}
}