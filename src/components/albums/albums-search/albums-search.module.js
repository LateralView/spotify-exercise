import angular from 'angular';
import { AlbumsSearchComponent } from './albums-search.component.js';

export const AlbumsSearchModule = angular
  .module('albums-search.module', [])
  .component('albumsSearch', AlbumsSearchComponent)
  .name;