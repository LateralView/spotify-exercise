import angular from 'angular';
import { AlbumsModule } from './albums/albums.module';
import { AlbumDetailsModule } from './album-details/album-details.module';

export const ComponentsModule = angular
  .module('app.components', [
    AlbumsModule,
    AlbumDetailsModule
  ])
  .name;