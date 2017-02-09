import angular from 'angular';

import { CommentsListItemModule } from './comments-list-item/comments-list-item.module';
import { CommentsListComponent } from './comments-list.component';

export const CommentsListModule = angular.
	module('commentsListModule', [
		CommentsListItemModule
	])
	.component('commentsList', CommentsListComponent)
	.name