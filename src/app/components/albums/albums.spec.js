import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('Component: Albums', function () {
  beforeEach(angular.mock.module('albums'));
  beforeEach(angular.mock.module('ui.router'));
 
  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();

    scope.albums = 'Creep';
    element = angular.element('<albums albums="albums"></albums>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
 
  it('should render the albums', function() {
    var component = element[0];
    chai.expect(component.firstChild.id).to.equal('albums');
  }); 
});
