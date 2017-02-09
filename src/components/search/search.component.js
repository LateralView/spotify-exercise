import template from './search.html';

export const SearchComponent = {
  template,
  controller: class SearchComponent{
    constructor($state) {
      this.$state = $state;
    }

    search() {
      if(this.query.length > 3) {
        this.$state.go('album', {q: this.query});
      }
    }
  }
};