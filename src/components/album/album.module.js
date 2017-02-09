import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { AlbumComponent } from './album.component';
import { AlbumListModule } from './album-list/album-list.module';
import { AlbumService } from './album.service';


export const AlbumModule = angular
  .module('albumModule', [
    uiRouter,
    AlbumListModule
  ])
  .component('album', AlbumComponent)
  .service('AlbumService', AlbumService)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('album', {
      url: '/?q',
      template: '<album></album>'
    });
  })
  .name;