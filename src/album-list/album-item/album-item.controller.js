class AlbumItemComponent {
  doViewComments() {
    this.viewComments({
      $event: { album: this.album }
    });
  }
}

export default AlbumItemComponent;
