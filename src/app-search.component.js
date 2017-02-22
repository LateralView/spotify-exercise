import angular from 'angular';

import template from './app-search.html';

export const AppSearchComponent = {
  controller : function ($state, SpotifyService) {
    var ctrl = this;

    ctrl.search = function () {
      $state.go('search', {search: ctrl.term});
    }
  },
  template : template
}
