import angular from 'angular';
import AppCommentFormComponent from './app-album-comments-form.component';

const AppAlbumCommentsForm = angular
  .module('albumCommentsForm', [])
  .component('commentForm', AppCommentFormComponent)
  .name;

export default AppAlbumCommentsForm;
