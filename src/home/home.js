import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './home.component';
import albumItem from './albumItem/albumItem';
import searchFeature from './searchFeature/searchFeature';

const homeMain = angular
  .module('homeMain', [uiRouter, albumItem, searchFeature])
  .component('home', component)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider.state('home', {
      url: '/home',
      template: '<home></home>'

    });
  })
  .name;

export default homeMain;
