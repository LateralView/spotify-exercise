export default class AlbumComponent{
  constructor($state, $stateParams, AlbumService){
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.albumService = AlbumService;
  }

  $onInit(){
    this.albums = [];
    if(this.$stateParams.q) {
      this.albumService.getAlbumsByName(this.$stateParams.q)
      .then(response => this.albums = response.data.albums, err => console.log('an error has been occurred', err));
    }
  }

  albumSelected($event) {
    this.$state.go('comments', {
      albumId: $event.album.id
    });
  }
}