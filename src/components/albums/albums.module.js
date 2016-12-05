import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AlbumsListModule} from './albums-list/albums-list.module.js';
import { AlbumsComponent } from './albums.component.js';
import { AlbumsService } from './albums.service.js';

export const AlbumsModule = angular
  .module('albums.module', [uiRouter, AlbumsListModule])
  .component('albums', AlbumsComponent)
  .service('AlbumsService', AlbumsService)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('albums', {
        url: '/albums',
        template: '<albums></albums>'
      });
  })
  .name;

  