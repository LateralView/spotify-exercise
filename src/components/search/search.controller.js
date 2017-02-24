class AppSearchController {
  constructor($state) {
    'ngInject';
    this.$state = $state;
  }

  $onInit() {
  }

  search() {
    this.$state.go('search', {search: this.term});
  }
}

AppSearchController.$inject = ['$state'];

export default AppSearchController;
