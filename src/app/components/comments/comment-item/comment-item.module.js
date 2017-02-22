import { CommentItemComponent } from './comment-item.component';


export const CommentItemModule = angular
  .module('commentItem', [])
  .component('commentItem', CommentItemComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;