import angular from 'angular';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('AlbumsSearchComponent', function() {
  var componentController;

  beforeEach(angular.mock.module('albums-search.module'));
  beforeEach(angular.mock.inject(function($componentController) {
    componentController = $componentController;
  }));

  describe('#search()', function() {

    it('should call the `onSearch` binding, when searching an album', function() {
      var bindings = { onSearch: function () {} }; 
      var ctrl = componentController('albumsSearch', null, bindings);
      sinon.spy(ctrl, 'onSearch');
      sinon.spy(ctrl, 'search');
      ctrl.search();
      chai.expect(ctrl.onSearch).to.have.been.calledAfter(ctrl.search);  
      chai.expect(ctrl.onSearch).to.have.been.calledWithMatch( { $event: {} } );
    });
  });
});