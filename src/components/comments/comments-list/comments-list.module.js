import angular from 'angular';
import { CommentsListItemModule} from './comments-list-item/comments-list-item.module.js';
import { CommentsListComponent } from './comments-list.component.js';

export const CommentsListModule = angular
  .module('comments-list.module', [CommentsListItemModule])
  .component('commentsList', CommentsListComponent)
  .name;