import angular from 'angular';
import { AlbumCommentsModule } from '../../album-comments/comment.module';
import { AlbumListItemComponent } from './album-list-item.component';

export const AlbumListItemModule = angular
	.module('albumListItemModule', [
		AlbumCommentsModule
	])
	.component('albumListItem', AlbumListItemComponent)
	.name