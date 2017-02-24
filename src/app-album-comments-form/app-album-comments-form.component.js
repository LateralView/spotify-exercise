import angular from 'angular';
import controller from './app-album-comments-form.controller';
import template from './app-album-comments-form.html';


const AppAlbumCommentFormComponent = {
  bindings : {
    album : '=',
    comments: '=',
    viewForm: '='
  },
  controller,
  template
}

export default AppAlbumCommentFormComponent;
