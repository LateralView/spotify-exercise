import angular from 'angular';
import { CommentsModule } from '../../../comments/comments.module.js';
import { AlbumsListItemComponent } from './albums-list-item.component.js';

export const AlbumsListItemModule = angular
  .module('albums-list-item.module', [CommentsModule])
  .component('albumsListItem', AlbumsListItemComponent)
  .name;