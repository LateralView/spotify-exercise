import template from './app-album.html'

export const AppAlbumComponent = {
  controller : function ($state, SpotifyService) {

    var ctrl = this;

    SpotifyService.getAlbum($state.params.albumId)
    .then(data => {
      ctrl.album = data;
      console.log(data);
      return SpotifyService.getComments($state.params.albumId);
    })
    .then(data => {
      ctrl.comments = data;
    })
    .catch(data => {})

  },
  template: template
}
