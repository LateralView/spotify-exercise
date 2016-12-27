import angular from 'angular';
import uiRouter from 'angular-ui-router';
import home from './home/home';


angular
  .module('spotifyzier', [
    uiRouter,
    home
  ])
  .config(($urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/');
  });
