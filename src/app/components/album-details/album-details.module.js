import angular from 'angular';
import { AlbumDetailsComponent } from './album-details.component';
import { AlbumDetailsService } from './album-details.service';
import './album-details.scss';

export const AlbumDetailsModule = angular
  .module('albumDetails', [])
  .component('albumDetails', AlbumDetailsComponent)
  .service('AlbumDetailsService', AlbumDetailsService)
  .config(($qProvider) => {
    $qProvider.errorOnUnhandledRejections(false);
  })
  .name;