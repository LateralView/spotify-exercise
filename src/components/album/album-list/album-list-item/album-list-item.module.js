import angular from 'angular';
import { AlbumListItemComponent } from './album-list-item.component';

export const AlbumListItemModule = angular
	.module('albumListItemModule', [])
	.component('albumListItem', AlbumListItemComponent)
	.name