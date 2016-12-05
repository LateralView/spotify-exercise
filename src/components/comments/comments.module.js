import angular from 'angular';
import { CommentsComponent } from './comments.component.js';
import { CommentsService } from './comments.service.js';

export const CommentsModule = angular
  .module('comments.module', [])
  .component('comments', CommentsComponent)
  .service('CommentsService', CommentsService)
  .name;