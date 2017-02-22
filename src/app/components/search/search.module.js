import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

export const SearchModule = angular
  .module('search', [
    uiRouter
  ])
  .component('app', SearchComponent)
  .service('SearchService', SearchService)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('search', {
        url: '/search',
        template: '<app></app>'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;