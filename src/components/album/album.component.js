import template from './album.html';

export const AlbumComponent = {
	template,
	controller: class AlbumComponent{
		constructor(AlbumService, $stateParams){
			this.albumService = AlbumService;
			this.albumName = $stateParams.albumName;
		}

		$onInit(){
			this.albums = [];
			
			if(this.albumName){
				this.albumService.getAlbumsByName(this.albumName).then(response => {
					this.albums = response.data.albums;
				});
			}
		}

		search({album}){
			this.albumService.getAlbumsByName(album).then(response => {
				this.albums = response.data.albums;
			});
		}
	}
}