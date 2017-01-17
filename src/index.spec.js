import angular from 'angular';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('App Default Route Test', function() {
  beforeEach(angular.mock.module('spotifyzier'));

  it('should set "/albums" as default route', angular.mock.inject(function($rootScope, $location) {
    $location.path('/a/invalid-route');
    $rootScope.$apply();
    chai.expect($location.path()).to.equal('/albums');
  }));
});
