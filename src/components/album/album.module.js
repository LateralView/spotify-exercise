import angular from 'angular';
import AppAlbumComponent from './album.component';

const AppAlbum = angular
  .module('album', [])
  .component('album', AppAlbumComponent)
  .name;

export default AppAlbum;
