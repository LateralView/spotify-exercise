import template from './comment-list.html';

export const CommentListComponent = {
	template,
	bindings: {
		comments: '<'
	},
	controller: class CommentListComponent{}
}