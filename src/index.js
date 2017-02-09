import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { ComponentsModule } from './components/components.module';

angular
  .module('spotifyzier', [
    uiRouter,
    ComponentsModule
  ])
  .config(($urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/');
  });

