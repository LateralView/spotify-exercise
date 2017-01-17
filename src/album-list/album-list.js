import component from './album-list.component';
import service from './album-list.service';

import albumItem from './album-item/album-item';

const albumList = angular
  .module('spotifyzier.albumList', [
    albumItem
  ])
  .service('AlbumListService', service)
  .component('albumList', component)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('albumList', {
        url: '/',
        section: 'album-list',
        template: '<album-list></album-list>'
      });
  })
  .name;

export default albumList;
