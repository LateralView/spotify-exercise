import angular from 'angular';
import { AlbumsListItemModule} from './albums-list-item/albums-list-item.module.js';
import { AlbumsListComponent } from './albums-list.component.js';

export const AlbumsListModule = angular
  .module('albums-list.module', [AlbumsListItemModule])
  .component('albumsList', AlbumsListComponent)
  .name;