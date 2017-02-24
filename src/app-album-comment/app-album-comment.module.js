import angular from 'angular';
import AppCommentComponent from './app-album-comment.component';

const AppAlbumComment = angular
  .module('albumComment', [])
  .component('comment', AppCommentComponent)
  .name;

export default AppAlbumComment;
