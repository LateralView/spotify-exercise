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
  var controller;
  beforeEach(inject(function($rootScope, $compile, $httpBackend){
    scope = $rootScope.$new();

    scope.albums = 'Creep';
    element = angular.element('<albums albums="albums"></albums>');
    element = $compile(element)(scope);
    controller = element.controller('albums');
    controller.data = [{ id: 123456 }];
    scope.$digest();
  }));
 
  it('should render the albums', function() {
    var component = element[0];
    chai.expect(component.firstChild.id).to.equal('albums');
  });
 
  it('should call getAlbums(query) method with params', angular.mock.inject(function($httpBackend) {
    $httpBackend.expectGET('/search?q=Testeo').respond([]);

    element.controller('albums').AlbumsService.getAlbums('Testeo')
      .then(function(response) {
        chai.expect(response).to.equal([]);
        done();
      })
      .catch(function(error) {
        done(error);
      });

    $httpBackend.flush();
  }));
 
  it('should call viewComments and go to that view', angular.mock.inject(function($rootScope, $state) {
    $state.go = sinon.spy();
    var component = element[0];
    var btnViewComments = component.getElementsByClassName('btnViewComments')[0];
    angular.element(btnViewComments).triggerHandler('click');
    chai.expect($state.go).calledWith('album', { albumId: 123456 });
  }));
});
