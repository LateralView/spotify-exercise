class AppAlbumCommentsFormController {
  constructor(SpotifyService) {
    'ngInject';
    this.SpotifyService = SpotifyService;
  }

  $onInit() {
  }

  submit(form) //Submit comment to BD
  {
      this.SpotifyService.addComment({ "text" : this.comment, "email" : this.email, "albumId" : this.album.id})
      .then(data => {
        this.comments.push(data);
        this.viewForm = false;
      })
      .catch(data => {})
  }
}

AppAlbumCommentsFormController.$inject = ['SpotifyService'];

export default AppAlbumCommentsFormController;
