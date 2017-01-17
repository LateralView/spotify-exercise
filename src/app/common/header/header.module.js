import angular from 'angular';
import { HeaderComponent } from './header.component';
import { HeaderSearch } from './header-search.directive';
import './header.scss';

export const HeaderModule = angular
  .module('header', [])
  .component('header', HeaderComponent)
  .directive('headerSearch', () => new HeaderSearch())
  .name;