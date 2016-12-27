class AlbumItemComponent {
  doViewComments() {
    event.album.isCommentEnabled = true;
    
    this.viewComments({
      $event: { album: this.album }
    });
  }
}

export default AlbumItemComponent;
