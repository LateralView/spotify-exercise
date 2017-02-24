class AppSearchResultController {
  constructor($state, SpotifyService) {
    'ngInject';
    this.$state = $state;
    this.SpotifyService = SpotifyService;
    this.result = null;
  }

  $onInit() {
    if (!this.$state.params.search) return;
    this.search(this.$state.params.search);
  }

  search(term) {
    this.SpotifyService.search(term)
    .then(data => {
      this.result = data.albums;
    })
    .catch(data => {
    })
  }
}

AppSearchResultController.$inject = ['$state', 'SpotifyService'];

export default AppSearchResultController;
