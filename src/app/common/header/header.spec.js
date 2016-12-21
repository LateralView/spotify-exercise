import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import noop from 'lodash/noop';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('Common: Header', function () {
  beforeEach(angular.mock.module('header'));
  beforeEach(angular.mock.module(uiRouter));
 
  var element;
  var scope;
  beforeEach(angular.mock.inject(function($rootScope, $compile, $window){
    $window['ui-router-visualizer'] = { visualizer: noop };
    scope = $rootScope.$new();
    element = angular.element('<header></header>');
    element = $compile(element)(scope);
    scope.$digest();
  }));
 
  it('should render the header', function() {
    var input = element.find('input')[0];
    chai.expect(input.value).to.equal('');
  });
 
  it('should make an album search', function() {
    var input = element.find('input')[0];

    input.value = 'Testeo';
    element.find('input').triggerHandler('keyup');

    chai.expect(input.value).to.equal('Testeo');
  });
 
  it('should reset search', function() {
    var input = element.find('input')[0];

    input.value = '';
    element.find('input').triggerHandler('keyup');

    chai.expect(input.value).to.equal('');
  });

  it('test on destroy keyup unbind', function(){
    var scope = element.find('input').scope();
    scope.$destroy();
  });
});
