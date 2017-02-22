import angular from 'angular';
import { SearchModule } from './search/search.module';
import { CommentsModule } from './comments/comments.module';
import { AlbumsModule } from './albums/albums.module';

export const ComponentsModule = angular
    .module('ComponentsModule', [SearchModule, AlbumsModule, CommentsModule])
    .config(() => {
        'ngInject';
    })
    .name;