import template from './album-list-item.html';

export const AlbumListItemComponent = {
	template,
	bindings: {
		album: '<',
		location: '@'
	},
	controller: class AlbumListItemComponent{
		constructor($state){
			this.state = $state;
		}

  		goToMain() {
		  this.state.go('/');
		}
		  
	  	goToComments() {
		  this.state.go('comments', {albumId: this.album.id});
		}	
	}
}