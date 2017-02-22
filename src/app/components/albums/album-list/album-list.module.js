import {AlbumListComponent} from './album-list.component';


export const AlbumListModule = angular
  .module('albumList',[])
  .component('albumList', AlbumListComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;