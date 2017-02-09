import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { SearchComponent } from './search.component';

export const SearchModule = angular
	.module('searchModule', [uiRouter])
	.component('search', SearchComponent)
	.name;