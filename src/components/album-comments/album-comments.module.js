import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AppAlbumCommentsComponent from './album-comments.component';

const AppAlbumComments = angular
  .module('albumComments', [])
  .component('albumComments', AppAlbumCommentsComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('comments', {
        url: "/comments/:albumId",
        component: 'albumComments'
      })
  })
  .name;

export default AppAlbumComments;
