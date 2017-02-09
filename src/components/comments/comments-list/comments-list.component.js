import template from './comments-list.html';
import controller from './comment-list.controller';

export const CommentsListComponent = {
	template,
	controller,
	bindings: {
		comments: '<'
	}
}