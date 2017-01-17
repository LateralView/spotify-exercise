import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './albumItem.component';

const albumItem = angular
  .module('albumItem', [uiRouter])
  .component('albumItem', component)
  .name;

export default albumItem;
