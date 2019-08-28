import React from 'react'
import { render } from '@testing-library/react'
//import renderer for snapshot
import renderer from 'react-test-renderer'

import UGameCard from './UpcomingGameCard'

//test to check that the app will display when called.
describe('<UGameCard />', () => {
  it('should display', () => {
    let load = render(<UGameCard/>)
    
  })
  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<UGameCard />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
})