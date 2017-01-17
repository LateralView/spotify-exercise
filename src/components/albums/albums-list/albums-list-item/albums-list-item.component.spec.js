import angular from 'angular';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('AlbumsListItemComponent', function() {
  var componentController;

  beforeEach(angular.mock.module('albums-list-item.module'));
  beforeEach(angular.mock.inject(function($componentController) {
    componentController = $componentController;
  }));

  describe('#switchComment()', function() {

    it('should switch the value of `isWatchingComment` property, when clicking in `VIEW COMMENTS / BACK TO SEARCH` buttons', function() {
      var ctrl = componentController('albumsListItem');
      var previousValue = ctrl.isWatchingComment;
      ctrl.switchComment();
      var laterValue = ctrl.isWatchingComment;
      chai.expect(ctrl.isWatchingComment).to.be.a('boolean');
      chai.expect(previousValue).to.not.equal(laterValue);
    });
  });
});