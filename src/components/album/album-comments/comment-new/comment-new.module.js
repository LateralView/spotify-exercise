import angular from 'angular';

import { CommentNewComponent } from './comment-new.component.js';

export const CommentNewModule = angular
	.module('commentNewModule', [])
	.component('commentNew', CommentNewComponent)
	.name