import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './searchFeature.component';

const searchFeature = angular
  .module('searchFeature', [uiRouter])
  .component('searchFeature', component)
  .name;

export default searchFeature;
