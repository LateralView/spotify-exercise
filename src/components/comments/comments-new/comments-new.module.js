import angular from 'angular';

import { CommentsNewComponent } from './comments-new.component.js';

export const CommentsNewModule = angular
	.module('commentsNewModule', [])
	.component('commentsNew', CommentsNewComponent)
	.name