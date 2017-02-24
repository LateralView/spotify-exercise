import angular from 'angular';
import AppCommentFormComponent from './album-comments-form.component';

const AppAlbumCommentsForm = angular
  .module('albumCommentsForm', [])
  .component('commentForm', AppCommentFormComponent)
  .name;

export default AppAlbumCommentsForm;
