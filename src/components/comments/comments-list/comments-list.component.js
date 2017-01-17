import template from './comments-list.html';
import { CommentsListItemComponent} from './comments-list-item/comments-list-item.component.js';

export const CommentsListComponent = {
  bindings: {
    comments: '<'
  },
  template,
  controller: class CommentsListComponent {

  }
};