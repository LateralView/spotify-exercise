import component from './album-item.component';

const albumItem = angular
  .module('spotifyzier.albumItem', [])
  .component('albumItem', component)
  .name;

export default albumItem;
