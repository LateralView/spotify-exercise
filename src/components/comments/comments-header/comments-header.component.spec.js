import angular from 'angular';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('CommentsHeaderComponent', function() {
  var componentController;

  beforeEach(angular.mock.module('comments-header.module'));
  beforeEach(angular.mock.inject(function($componentController) {
    componentController = $componentController;
  }));

  describe('#startAdding()', function() {

    it('should call the `onStartAddingComment` binding, when clicking in `Add comment` button', function() {
      var bindings = { onStartAddingComment: function () {} }; 
      var ctrl = componentController('commentsHeader', null, bindings);
      sinon.spy(ctrl, 'onStartAddingComment');
      sinon.spy(ctrl, 'startAdding');
      ctrl.startAdding();
      chai.expect(ctrl.onStartAddingComment).to.have.been.calledAfter(ctrl.startAdding);  
    });
  });

  describe('#cancelAdding()', function() {

    it('should call the `onCancelAddingComment` binding, when clicking in `Add comment` button', function() {
      var bindings = { onCancelAddingComment: function () {} }; 
      var ctrl = componentController('commentsHeader', null, bindings);
      sinon.spy(ctrl, 'onCancelAddingComment');
      sinon.spy(ctrl, 'cancelAdding');
      ctrl.cancelAdding();
      chai.expect(ctrl.onCancelAddingComment).to.have.been.calledAfter(ctrl.cancelAdding);  
    });
  });
});