import template from './albums.html';
import get from 'lodash/get';

export const AlbumsComponent = {
  template,
  controllerAs: 'albums',
  bindings: {
  	albums: '@'
  },
  controller: class AlbumsController {
	  constructor($state, AlbumsService) {
	    'ngInject';
	    this.$state = $state;
	    this.get = get;
	    this.AlbumsService = AlbumsService;
	    this.name = 'albums';
	    this.data = [];
	  }

	  $onChanges() {
	  	this.AlbumsService.getAlbums(this.albums)
	  	.then((responce) => {
	  		this.data = this.get(responce, "albums", {}).items || [];
	  	});
	  }

	  viewComments(albumId) {
      this.$state.go('album', { albumId });
	  }
	}
};
