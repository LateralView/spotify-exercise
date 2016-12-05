import angular from 'angular';
import { CommentsListItemComponent } from './comments-list-item.component.js';

export const CommentsListItemModule = angular
  .module('comments-list-item.module', [])
  .component('commentsListItem', CommentsListItemComponent)
  .name;