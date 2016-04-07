// To run Test --> npm run test:watch

import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// All frameworks carry those properties

/* Use describe to group together similar tests */
describe('CommentBox', () => {

  let component = null;

  // Executes before each unit test
  beforeEach(() => {
    // create an instance of a component
    component = renderComponent(CommentBox);
  });

  /* Use 'it' to test a single attribute of a target */
  it('has a text area', () => {
    /* Use 'expect' to make an 'assertion' about a target */
    // We just jquery as a helper for testing
    expect(component.find('textarea')).to.exist;
  });

  it('has a text button', () => {
    expect(component.find('button')).to.exist;
  });

  it('has the class comment-box', () => {
    //https://github.com/chaijs/chai-jquery
    expect(component).to.have.class('comment-box');
  });
  // Those tests are very related, so we will descibre them
  describe('entering some text', () => {

    beforeEach(() => {
      // inputing text to textarea
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      // trigger submit - this is a form html obj
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });

});
