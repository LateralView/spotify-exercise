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
  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();

    scope.albums = '4MGDnutWZLdTCP3nmT1tgu';
    element = angular.element('<album-details album="albums"></album-details>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
 
  it('should render the albums details', function() {
    var component = element[0];
    chai.expect(component.firstChild.id).to.equal('album-details');
  }); 
 
  it('should go back to root', angular.mock.inject(function($location)   {
    var component = element[0];
    var btnBack = component.getElementsByClassName('btnBack')[0];
    angular.element(btnBack).triggerHandler('click');
    chai.expect($location.path()).to.equal('');
  })); 
 
  it('should go back to albums', angular.mock.inject(function($rootScope, $location)  {
    var component = element[0];
    var btnBack = component.getElementsByClassName('btnBack')[0];
    $rootScope.query = 'Testeo';
    angular.element(btnBack).triggerHandler('click');
    chai.expect($location.path()).to.equal('');
  })); 
 
  it('should toogle addComments component state', function()  {
    var component = element[0];
    var btnBack = component.getElementsByClassName('toogleAdd')[0];
    angular.element(btnBack).triggerHandler('click');
    chai.expect(component.firstChild.id).to.equal('album-details');
  }); 
 
  it('should call addComments endpoint & save it', function()  {
    var component = element[0];
    var saveComment = component.getElementsByClassName('saveComment')[0];
    angular.element(saveComment).triggerHandler('click');
    chai.expect(component.firstChild.id).to.equal('album-details');
  }); 
});