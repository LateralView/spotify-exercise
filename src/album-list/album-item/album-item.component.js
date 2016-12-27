import controller from './album-item.controller';
import template from './album-item.template.html';

const component = {
  controller: controller,
  template: template,
  bindings: {
    album: '<'
  }
};

export default component;
