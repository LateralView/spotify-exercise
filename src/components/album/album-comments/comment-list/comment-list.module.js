import angular from 'angular';

import { CommentListItemModule } from './comment-list-item/comment-list-item.module';
import { CommentListComponent } from './comment-list.component';

export const CommentListModule = angular.
	module('commentListModule', [
		CommentListItemModule
	])
	.component('commentList', CommentListComponent)
	.name