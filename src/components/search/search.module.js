import angular from 'angular';
import AppSearchComponent from './search.component';

const AppSearch = angular
  .module('search', [])
  .component('search', AppSearchComponent)
  .name;

export default AppSearch;
