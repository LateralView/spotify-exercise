import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SpotifyService from './service'
import { AppDashboardComponent } from './app-dashboard.component'
import { AppAlbumComponent } from './app-album.component'


const root = angular
  .module('spotifyzier', [
    uiRouter
  ])
  .service('SpotifyService', SpotifyService)
  .component('app', AppDashboardComponent)
  .component('appAlbum', AppAlbumComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('index', {
        url: '/',
        component: 'app'
      })
      .state('album', {
        url: "/album/:albumId",
        component: 'appAlbum'
      })
    $urlRouterProvider.otherwise('/');
})
