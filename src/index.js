import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SpotifyService from './service'
import { AppSearchComponent } from './app-search.component'
import { AppSearchResultComponent } from './app-search-result.component'
import { AppAlbumComponent } from './app-album.component'
import { AppAlbumCommentsComponent } from './app-album-comments.component'
import { AppCommentComponent } from './app-comment.component'
import { AppCommentFormComponent } from './app-comment-form.component'

const root = angular
  .module('spotifyzier', [
    uiRouter
  ])
  .service('SpotifyService', SpotifyService)
  .component('search', AppSearchComponent)
  .component('searchResult', AppSearchResultComponent)
  .component('album', AppAlbumComponent)
  .component('albumComments', AppAlbumCommentsComponent)
  .component('comment', AppCommentComponent)
  .component('commentForm', AppCommentFormComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('index', {
        url: '/',
        component: 'searchResult'
      })
      .state('search', {
        url: '/search/:search',
        component: 'searchResult'
      })
      .state('comments', {
        url: "/comments/:albumId",
        component: 'albumComments'
      })
    $urlRouterProvider.otherwise('/');
})
