import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('Component: Album Details', function () {
  beforeEach(angular.mock.module('albumDetails'));
  beforeEach(angular.mock.module('ui.router'));
 
  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile, $state, $httpBackend){
    scope = $rootScope.$new();

    scope.albums = '4MGDnutWZLdTCP3nmT1tgu';
    element = angular.element('<album-details album="albums"></album-details>');
    element = $compile(element)(scope);
    scope.$digest();
  }));
 
  it('should render the albums details', function() {
    var component = element[0];
    chai.expect(component.firstChild.id).to.equal('album-details');
  });
 
  it('should go back to root', angular.mock.inject(function($location, $state)   {
    $state.go = sinon.spy();
    var component = element[0];
    var btnBack = component.getElementsByClassName('btnBack')[0];
    angular.element(btnBack).triggerHandler('click');
    chai.expect($state.go).calledWith('root');
  }));
 
  it('should go back to albums', angular.mock.inject(function($rootScope, $state)  {
    $state.go = sinon.spy();
    var component = element[0];
    var btnBack = component.getElementsByClassName('btnBack')[0];
    $rootScope.query = 'Testeo';
    angular.element(btnBack).triggerHandler('click');
    chai.expect($state.go).calledWith('albums', { query: 'Testeo' });
  }));
 
  it('should toogle addComments component state', function()  {
    var component = element[0];
    var btnBack = component.getElementsByClassName('toogleAdd')[0];
    angular.element(btnBack).triggerHandler('click');
    chai.expect(element.controller('albumDetails').commenting).to.equal(true);
  });
 
  it('should call addComments endpoint & save it', function()  {
    var component = element[0];
    var btnBack = component.getElementsByClassName('toogleAdd')[0];
    angular.element(btnBack).triggerHandler('click');

    var btnSaveComment = component.getElementsByClassName('btnSaveComment')[0];
    angular.element(btnSaveComment).triggerHandler('click');
    chai.expect(element.controller('albumDetails').commenting).to.equal(true);
  });
 
  it('should call getAlbum(id) method with params', angular.mock.inject(function($httpBackend) {
    $httpBackend.expectGET('/album/123456').respond({});

    element.controller('albumDetails').AlbumDetailsService.getAlbum(123456)
      .then(function(response) {
        chai.expect(response).to.equal({});
        done();
      })
      .catch(function(error) {
        done(error);
      });

    $httpBackend.flush();
  }));
 
  it('should call getComments(id) method with params', angular.mock.inject(function($httpBackend) {
    $httpBackend.expectGET('/comments/123456').respond([]);

    element.controller('albumDetails').AlbumDetailsService.getComments(123456)
      .then(function(response) {
        chai.expect(response).to.equal([]);
        done();
      })
      .catch(function(error) {
        done(error);
      });

    $httpBackend.flush();
  }));
 
  it('should call addComment(comment) method with params', angular.mock.inject(function($httpBackend) {
    $httpBackend.expectPOST('/comments').respond({});

    element.controller('albumDetails').AlbumDetailsService.addComment({})
      .then(function(response) {
        chai.expect(response).to.equal({});
        done();
      })
      .catch(function(error) {
        done(error);
      });

    $httpBackend.flush();
  }));
});