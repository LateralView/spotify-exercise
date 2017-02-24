import angular from 'angular';
import AppAlbumComponent from './app-album.component';

const AppAlbum = angular
  .module('album', [])
  .component('album', AppAlbumComponent)
  .name;

export default AppAlbum;
