import angular from 'angular';

import { CommentsListItemComponent } from './comments-list-item.component';

export const CommentsListItemModule = angular
	.module('commentsListItemModule', [])
	.component('commentsListItem', CommentsListItemComponent)
	.name