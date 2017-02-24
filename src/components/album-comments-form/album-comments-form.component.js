import angular from 'angular';
import controller from './album-comments-form.controller';
import template from './album-comments-form.html';


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
