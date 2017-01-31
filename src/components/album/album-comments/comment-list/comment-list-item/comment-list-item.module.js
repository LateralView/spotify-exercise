import angular from 'angular';

import { CommentListItemComponent } from './comment-list-item.component';

export const CommentListItemModule = angular
	.module('commentListItemModule', [])
	.component('commentListItem', CommentListItemComponent)
	.name