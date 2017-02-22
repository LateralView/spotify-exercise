export class CommentsService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
    }
    getComments(albumId) {
        return this.$http.get(/comments/ + albumId).then(response => response.data);
    }

    postComment(album) {
        return this.$http.post('/comments', album).then(response => response.data);
    }
}