import angular from 'angular';
import uiRouter from 'angular-ui-router';
import albumList from './album-list/album-list';
import searchBar from './search-bar/search-bar';

angular
  .module('spotifyzier', [
    uiRouter,
    albumList,
    searchBar
  ])
  .config(($urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/');
  });
