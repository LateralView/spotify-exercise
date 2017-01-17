import angular from 'angular';
import { CommentsHeaderModule} from './comments-header/comments-header.module.js';
import { CommentsFormModule} from './comments-form/comments-form.module.js';
import { CommentsListModule} from './comments-list/comments-list.module.js';
import { CommentsComponent } from './comments.component.js';
import { CommentsService } from './comments.service.js';

export const CommentsModule = angular
  .module('comments.module', [CommentsHeaderModule, CommentsFormModule, CommentsListModule])
  .component('comments', CommentsComponent)
  .service('CommentsService', CommentsService)
  .name;