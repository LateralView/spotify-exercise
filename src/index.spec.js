import angular from 'angular';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('App Routes Testing', function() {
  beforeEach(angular.mock.module('spotifyzier'));

  it('Should set "/" as default route', angular.mock.inject(function($rootScope, $location) {
    $location.path('/a/invalid-route');
    $rootScope.$apply();
    chai.expect($location.path()).to.equal('/');
  }));

  it('Should set "/albums" and navigate to route', angular.mock.inject(function($rootScope, $location) {
    $location.path('/albums/test');
    $rootScope.$apply();
    chai.expect($location.path()).to.equal('/albums/test');
  }));

  it('Should set "/album" and navigate to route', angular.mock.inject(function($rootScope, $location) {
    $location.path('/album/4MGDnutWZLdTCP3nmT1tgu');
    $rootScope.$apply();
    chai.expect($location.path()).to.equal('/album/4MGDnutWZLdTCP3nmT1tgu');
  }));
});
