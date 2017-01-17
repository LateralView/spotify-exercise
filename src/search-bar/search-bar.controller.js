class SearchBarComponent {
  $onInit($window) {
    'ngInject';
  }

  textModified(value) {
    this.doSearch({
      $event: { search: value }
    });
  }
}

export default SearchBarComponent;
