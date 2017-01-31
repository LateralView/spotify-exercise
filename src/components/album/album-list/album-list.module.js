import angular from 'angular';

import { AlbumListComponent } from './album-list.component';
import { AlbumListItemModule } from './album-list-item/album-list-item.module';

export const AlbumListModule = angular
	.module('albumListModule', [
		AlbumListItemModule	
	])
	.component('albumList', AlbumListComponent)
	.name