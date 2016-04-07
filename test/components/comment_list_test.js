// To run Test --> npm run test:watch

import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

// All frameworks carry those properties

/* Use describe to group together similar tests */
describe('CommentList', () => {

  let component;

  beforeEach(() => {
    // how to push props to this obj
    // third argument are props to be passed to the component
    const props = { comments: ["test", "test2", "test3"] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
    expect(component.find('li')).to.contain('test');
    expect(component.find('li')).to.contain('test2');
    expect(component.find('li')).to.contain('test3');
  });

});
