/**
 * components/components.js
 *
 * Module that contains the specific components for the application.
 */

import angular from 'angular'

import album from './album/album.module'
import albumComments from './album-comments/album-comments.module'
import albumComment from './album-comment/album-comment.module'
import albumCommentsForm from './album-comments-form/album-comments-form.module'
import search from './search/search.module'
import searchResult from './search-result/search-result.module'

const components = angular
  .module('app.components', [
    search,
    searchResult,
    album,
    albumComments,
    albumComment,
    albumCommentsForm
  ])
  .name

export default components
