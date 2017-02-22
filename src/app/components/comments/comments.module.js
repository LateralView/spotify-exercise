import { CommentsComponent } from './comments.component';
import { CommentsService } from './comments.service';
import { CommentItemModule } from './comment-item/comment-item.module';
import { CommentListModule } from './comment-list/comment-list.module';


export const CommentsModule = angular
  .module('comments', [CommentItemModule, CommentListModule])
  .component('comments', CommentsComponent)
  .service('CommentsService', CommentsService)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;