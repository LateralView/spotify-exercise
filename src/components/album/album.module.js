import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { AlbumComponent } from './album.component';
import { AlbumSearchModule } from './album-search/album-search.module';
import { AlbumListModule } from './album-list/album-list.module';
import { AlbumCommentsModule } from './album-comments/comment.module';
import { AlbumService } from './album.service';


export const AlbumModule = angular
	.module('albumModule', [
		uiRouter,
		AlbumSearchModule,
		AlbumListModule,
		AlbumCommentsModule
	])
	.component('album', AlbumComponent)
	.service('AlbumService', AlbumService)
	.config(($stateProvider) => {
		'ngInject';
		$stateProvider
			.state('album', {
				url: '/',
				template: '<album></album>'
			})
	})
	.name