import angular from 'angular';
import { CommentsHeaderComponent } from './comments-header.component.js';

export const CommentsHeaderModule = angular
  .module('comments-header.module', [])
  .component('commentsHeader', CommentsHeaderComponent)
  .name;