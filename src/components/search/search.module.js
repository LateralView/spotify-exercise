import angular from 'angular';

import { SearchComponent } from './search.component';

export const SearchModule = angular
	.module('searchModule', [])
	.component('search', SearchComponent)
	.name