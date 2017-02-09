import template from './album-list-item.html';

export const AlbumListItemComponent = {
  template,
  bindings: {
    album: '<',
    buttonText: '@',
    onItemSelected: '&'
  },
  controller: class AlbumListItemComponent{
    onItemClick() {
      this.onItemSelected({
        $event: {
          album: this.album
        }
      });
    }
  }
};