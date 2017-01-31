import template from './album.html';

export const AlbumComponent = {
	template,
	controller: class AlbumComponent{
		constructor(AlbumService){
			this.albumService = AlbumService;
			this.albums = [];
		}

		search({album}){
			this.albumService.getAlbumsByName(album).then(response => {
				this.albums = response.data.albums;
			});
		}
	}
}