import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SpotifyService from './service'
import search from './app-search/app-search.module'
import searchResult from './app-search-result/app-search-result.module'
import album from './app-album/app-album.module'
import albumComments from './app-album-comments/app-album-comments.module'
import albumComment from './app-album-comment/app-album-comment.module'
import albumCommentsForm from './app-album-comments-form/app-album-comments-form.module'

const root = angular
  .module('spotifyzier', [
    uiRouter,
    search,
    searchResult,
    album,
    albumComments,
    albumComment,
    albumCommentsForm
  ])
  .service('SpotifyService', SpotifyService)
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
  })
