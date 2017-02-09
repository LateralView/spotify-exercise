import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AlbumListItemComponent } from './album-list-item.component';

export const AlbumListItemModule = angular
	.module('albumListItemModule', [uiRouter])
	.component('albumListItem', AlbumListItemComponent)
	.name;