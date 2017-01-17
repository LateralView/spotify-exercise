import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';

angular
  .module('spotifyzier', [
    uiRouter,
    ComponentsModule,
    CommonModule,
  ])
  .config(($urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/albums');
  });
