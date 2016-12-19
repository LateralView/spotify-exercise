import angular from 'angular';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('CommentsFormComponent', function() {
  var componentController;

  beforeEach(angular.mock.module('comments-form.module'));
  beforeEach(angular.mock.inject(function($componentController) {
    componentController = $componentController;
  }));

  describe('#submit()', function() {

    it('should call the `onFinishAddingComment` binding, when submitting the form', function() {
      var bindings = { onFinishAddingComment: function () {} }; 
      var ctrl = componentController('commentsForm', null, bindings);
      ctrl.newComment.email = 'someEmail';
      ctrl.newComment.text = 'someText';
      sinon.spy(ctrl, 'onFinishAddingComment');
      sinon.spy(ctrl, 'submit');
      ctrl.submit();
      chai.expect(ctrl.onFinishAddingComment).to.have.been.calledAfter(ctrl.submit);  
      chai.expect(ctrl.onFinishAddingComment).to.have.been.calledWithMatch( { $event: {} } );
    });
  });
});