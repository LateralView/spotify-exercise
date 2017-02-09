import template from './album-list.html';
import controller from './album-list.controller';

export const AlbumListComponent = {
  template,
  controller,
  bindings: {
    data: '<',
    onItemSelected: '&'
  }
};