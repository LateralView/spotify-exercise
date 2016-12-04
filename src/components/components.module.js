import angular from 'angular';
import { AlbumsModule } from './albums/albums.module';

export const ComponentsModule = angular
  .module('components.module', [
    AlbumsModule
  ])
  .name;