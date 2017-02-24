import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AppSearchResultComponent from './app-search-result.component';

const AppSearchResult = angular
  .module('searchResult', [])
  .component('searchResult', AppSearchResultComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('index', {
        url: '/',
        component: 'searchResult'
      })
      .state('search', {
        url: '/search/:search',
        component: 'searchResult'
      })
  })
  .name;

export default AppSearchResult;
