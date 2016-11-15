import angular from 'angular';
import uiRouter from 'angular-ui-router';

angular
  .module('spotifyzier', [uiRouter])
  .config(($urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/');
  });
