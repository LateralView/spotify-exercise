import template from './header.html';

export const HeaderComponent = {
  template,
  controllerAs: 'header',
  bindings: {},
  controller: class HeaderController {
    constructor($state) {
      'ngInject';
      this.name = 'header';
      this.$state = $state;
    }

    fetchSearch(search) {
      if (search) {
        this.$state.go('albums', { query: search });
      } else {
        this.$state.go('root');
      }
    }
  }
};
