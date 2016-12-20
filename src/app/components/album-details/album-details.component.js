import template from './album-details.html';

export const AlbumDetailsComponent = {
  template,
  controllerAs: 'album',
  bindings: {
  	album: '@'
  },
  controller: class AlbumDetailsController {
	  constructor($state, $rootScope, $location, AlbumDetailsService) {
	    'ngInject';
	    this.$state = $state;
	    this.$rootScope = $rootScope;
	    this.$location = $location;
	    this.AlbumDetailsService = AlbumDetailsService;
	    this.name = 'albumDetails';
	    this.data = [];
	    this.comments = [];
	    this.commenting = false;
	  }

	  $onChanges() {
	  	this.AlbumDetailsService.getAlbum(this.album)
	  	.then((responce = {}) => {
	  		this.data = responce;
	  	});
	  	
			this.getComments();
	  }

	  goBack() {
	  	const query = this.$rootScope.query;
	  	if (query) {
	  		this.$state.go("albums", { query });
	  	} else {
	  		this.$state.go("root");
	  	}
	  }

	  addComment() {
      this.commenting = !this.commenting;
	  }

	  getComments() {
	  	this.AlbumDetailsService.getComments(this.album)
	  	.then((responce = {}) => {
	  		this.comments = responce;
	  	});
	  }

	  postComment(event) {
	  	const form = angular.element(event.target)[0].closest("form");
	  	const email = form.elements.namedItem("email");
	  	const comment = form.elements.namedItem("comment");

	  	this.AlbumDetailsService.addComment({  	
                        "email": email.value,
                        "text": comment.value,
                        "albumId": this.album
                      })
	    .then(() => {
	    	email.value = "";
	    	comment.value = "";
	    	this.getComments();
	    });
	  }
	}
};
