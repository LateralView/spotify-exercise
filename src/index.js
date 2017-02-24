import angular from 'angular';
import uiRouter from 'angular-ui-router';

import components from './components/components';

const root = angular
  .module('spotifyzier', [
    uiRouter,
    components
  ])
  .service('SpotifyService', SpotifyService)
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
  })
