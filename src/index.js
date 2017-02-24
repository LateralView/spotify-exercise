import angular from 'angular';
import uiRouter from 'angular-ui-router';

import components from './components/components';
import SpotifyService from './service';

const root = angular
  .module('spotifyzier', [
    uiRouter,
    components
  ])
  .service('SpotifyService', SpotifyService)
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
  })
