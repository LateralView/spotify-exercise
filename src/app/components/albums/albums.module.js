import { AlbumItemModule } from './album-item/album-item.module';
import { AlbumListModule } from './album-list/album-list.module';


export const AlbumsModule = angular
    .module('Albums', [AlbumItemModule, AlbumListModule])
    .name;