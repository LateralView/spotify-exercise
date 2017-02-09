import angular from 'angular';
import uiRouter from 'angular-ui-router';
import service from './comments.service';

import { CommentsComponent } from './comments.component';
import { CommentsListModule } from './comments-list/comments-list.module';
import { CommentsNewModule } from './comments-new/comments-new.module';


export const CommentsModule = angular
.module('commentsModule', [
  CommentsListModule,
  CommentsNewModule		
])
.component('comments', CommentsComponent)
.service('CommentService', service)
.config(($stateProvider) => {
  'ngInject';
  $stateProvider.state('comments', {
    url: '/album/:albumId',
    template: '<comments></comments>'
  });
})
.name;
