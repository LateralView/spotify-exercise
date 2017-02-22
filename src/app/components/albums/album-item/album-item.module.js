import {AlbumItemComponent} from './album-item.component';


export const AlbumItemModule = angular
  .module('albumItem',[])
  .component('albumItem', AlbumItemComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;