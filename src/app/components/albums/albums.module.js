import angular from 'angular';
import { AlbumsComponent } from './albums.component';
import { AlbumsService } from './albums.service';
import './albums.scss';

export const AlbumsModule = angular
  .module('albums', [])
  .component('albums', AlbumsComponent)
  .service('AlbumsService', AlbumsService)
  .config(($qProvider) => {
    $qProvider.errorOnUnhandledRejections(false);
  }).name;