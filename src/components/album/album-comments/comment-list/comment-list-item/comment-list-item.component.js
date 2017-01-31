import template from './comment-list-item.html';

export const CommentListItemComponent = {
	template,
	bindings: {
		comment: '<'
	},
	controller: class CommentListItemComponent{}
}