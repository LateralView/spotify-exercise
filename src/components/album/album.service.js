export class AlbumService{
	
	constructor($q, $http){
		'ngInject';
		this.$http = $http;
	}

	getAlbumsByName(albumName) {
	return this.$http.get(`/search?q=${albumName}`);
	}

	getCommentsByAlbumId(id){
		return this.$http.get(`/comments/${id}`);
	}

	postNewComment(comment){
		return this.$http.post('/comments', comment);
	}
}

