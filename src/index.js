import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppModule } from './app/app.module';
import 'normalize.css';

angular
  .module('spotifyzier', [ AppModule, uiRouter])
  .config(($urlRouterProvider, $stateProvider) => {
    $urlRouterProvider.otherwise('/');

    const states = [{
      name: 'root',
      url: '/',
      component: 'app'
    },
    {
      name: 'albums',
      url: '/albums/{query}',
      component: 'albums',
      resolve: {
        albums: ($stateParams, $rootScope) => {
          $rootScope.query = $stateParams.query;
          return $stateParams.query;
        }
      }
    },  
    { 
      name: 'album', 
      url: '/album/{albumId}', 
      component: 'albumDetails',
      resolve: {
        album: ($stateParams) => {
          return $stateParams.albumId;
        }
      }
    }];
    
    // Loop over the state definitions and register them
    states.forEach((state) => {
      $stateProvider.state(state);
    });
  })
  .run(($uiRouter, $window) => {
    const stateVisualizer = $window['ui-router-visualizer'];
    if (stateVisualizer) stateVisualizer.visualizer($uiRouter);
  })
  .name;