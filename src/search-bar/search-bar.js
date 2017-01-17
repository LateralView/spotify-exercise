import component from './search-bar.component';

const searchBar = angular
  .module('spotifyzier.searchBar', [])
  .component('searchBar', component)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('searchBar', {
        url: '/',
        section: 'search-bar',
        template: '<search-bar></search-bar>'
      });
  })
  .name;

export default searchBar;
