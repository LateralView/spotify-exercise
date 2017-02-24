class AppAlbumCommentsController {
  constructor($state, SpotifyService) {
    'ngInject';
    this.$state = $state;
    this.SpotifyService = SpotifyService;
    this.newComment = false;
  }

  $onInit() {
    if (!this.$state.params.albumId) {
      this.$state.go('index');
    }
    else {
      this.SpotifyService.getAlbum(this.$state.params.albumId)
      .then(data => {
        this.album = data;
        return this.SpotifyService.getComments(this.$state.params.albumId);
      })
      .then(data => {
        this.comments = data;
      })
      .catch(data => {})
    }
  }

  addComment() {
    this.newComment = true;
  }

  quitComment() {
    this.newComment = false;
  }
}

AppAlbumCommentsController.$inject = ['$state', 'SpotifyService'];

export default AppAlbumCommentsController;
