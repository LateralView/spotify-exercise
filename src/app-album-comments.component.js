import template from './app-album-comments.html'

export const AppAlbumCommentsComponent = {
  controller : function ($state, SpotifyService) {

    var ctrl = this;

    if (!$state.params.albumId) {
      $state.go('index');
    }
    else {
      ctrl.newComment = false;

      SpotifyService.getAlbum($state.params.albumId)
      .then(data => {
        ctrl.album = data;
        return SpotifyService.getComments($state.params.albumId);
      })
      .then(data => {
        ctrl.comments = data;
      })
      .catch(data => {})

      ctrl.addComment = function()
      {
        ctrl.newComment = true;
      }

      ctrl.quitComment = function()
      {
        ctrl.newComment = false;
      }
    }
  },
  template: template
}
