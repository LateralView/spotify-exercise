import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ComponentsModule } from './app/components/components.module';

angular
  .module('spotifyzier', [uiRouter, ComponentsModule])
  .config(($urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/search');
  });
