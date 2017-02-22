import angular from 'angular'
import template from './app-search-result.html';

export const AppSearchResultComponent = {
  controller: function($state, SpotifyService) {
    var ctrl = this;

    ctrl.result = null;

    SpotifyService.search($state.params.search)
    .then(data => {
      ctrl.result = data.albums;
    })
    .catch(data => {
    })
  },
  template: template
}
