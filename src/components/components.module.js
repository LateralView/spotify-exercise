import angular from 'angular';

import { SearchModule } from './search/search.module';
import { AlbumModule } from './album/album.module';
import { CommentsModule } from './comments/comments.module';


export const ComponentsModule = angular
	.module('componentsModule', [
			SearchModule,
			CommentsModule,
			AlbumModule
		])
	.name