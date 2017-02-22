import {CommentListComponent} from './comment-list.component';


export const CommentListModule = angular
  .module('commentList',[])
  .component('commentList', CommentListComponent)
  .name;