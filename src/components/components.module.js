import angular from 'angular';
import { AlbumsModule } from './albums/albums.module.js';
import { CommentsModule } from './comments/comments.module.js';

export const ComponentsModule = angular
  .module('components.module', [AlbumsModule, CommentsModule])
  .name;