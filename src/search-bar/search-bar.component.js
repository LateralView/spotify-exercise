import controller from './search-bar.controller';
import template from './search-bar.template.html';

const component = {
  controller: controller,
  template: template,
  bindings: {
    doSearch: '&'
  }
};

export default component;
