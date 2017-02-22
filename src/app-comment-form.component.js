import angular from 'angular'
import template from './app-comment-form.html';

export const AppCommentFormComponent = {
  bindings : {
    album : '=',
    comments: '=',
    viewForm: '='
  },
  controller: function($state, SpotifyService) {
    var ctrl = this;

    ctrl.submitComment = function(form) //Submit comment to BD
    {
        SpotifyService.addComment({ "text" : form.comment.$viewValue, "email" : form.email.$viewValue, "albumId" : ctrl.album.id})
        .then(data => {
          ctrl.comments.push(data);
          ctrl.viewForm = false;
        })
        .catch(data => {})
    }
  },
  template : template
}
