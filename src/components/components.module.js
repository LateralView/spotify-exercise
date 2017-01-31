import angular from 'angular';
import { AlbumModule } from './album/album.module';

export const ComponentsModule = angular
	.module('componentsModule', [AlbumModule])
	.name