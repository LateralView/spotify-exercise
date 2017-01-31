import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { CommentComponent } from './comment.component';
import { CommentListModule } from './comment-list/comment-list.module';
import { CommentNewModule } from './comment-new/comment-new.module';


export const AlbumCommentsModule = angular
	.module('albumCommentsModule', [
		CommentListModule,
		CommentNewModule		
	])
	.component('albumComments', CommentComponent)
	/*.config(($stateProvider) => {
		'ngInject';
		$stateProvider
		.state('comment', {
			url: '/comments/:albumId',
			template: '<comment></comment>'
		})
	})*/
	.name