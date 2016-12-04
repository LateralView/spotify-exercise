import angular from 'angular';
import { CommentsComponent } from './comments.component.js';
import './comments.scss';

export const CommentsModule = angular
  .module('comments.module', [])
  .component('comments.component')
  .name;