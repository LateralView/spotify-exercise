import angular from 'angular';

import { AlbumSearchComponent } from './album-search.component';

export const AlbumSearchModule = angular
	.module('albumSearchModule', [])
	.component('albumSearch', AlbumSearchComponent)
	.name