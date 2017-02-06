export class AlbumService{
	
	constructor($http){
		'ngInject';
		this.$http = $http;
	}

	getAlbumsByName(albumName) {
		return this.$http.get("/search", {params:{"q": albumName}});
	}

	getAlbumById(id) {
		return this.$http.get("/album/"+id);
	}

	getCommentsByAlbumId(id){
		return this.$http.get("/comments/"+id);
	}

	postNewComment(comment){
		return this.$http.post('/comments', comment);
	}
}

