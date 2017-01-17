import angular from 'angular';
import { CommentsFormComponent } from './comments-form.component.js';

export const CommentsFormModule = angular
  .module('comments-form.module', [])
  .component('commentsForm', CommentsFormComponent)
  .name;