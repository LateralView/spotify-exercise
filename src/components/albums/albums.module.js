import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AlbumsComponent } from './albums.component.js';
import { AlbumsService } from './albums.service';

export const AlbumsModule = angular
  .module('albums.module', [
    uiRouter
  ])
  .component('albums', AlbumsComponent)
  .service('AlbumsService', AlbumsService)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('albums', {
        url: '/albums',
        template: '<albums></albums>'
      });
    console.log('AlbumsService in MODULE:', AlbumsService);
  })
  .name;

  