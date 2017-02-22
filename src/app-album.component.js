import angular from 'angular'
import template from './app-album.html'

export const AppAlbumComponent = {
  bindings:{
    album: '='
  },
  controller : function (SpotifyService) {
    var ctrl = this;
  },
  template: template
}
