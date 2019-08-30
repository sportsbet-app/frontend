import React from 'react'
import { render } from '@testing-library/react'
//import renderer for snapshot
import renderer from 'react-test-renderer'

import CardContainer from './CardContainer'

//test to check that the app will display when called.
describe('<CardContainer />', () => {
  it('should display', () => {
    //render the component
    render(<CardContainer/>)
    
  })
  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<CardContainer />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
})