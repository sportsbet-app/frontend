import React from 'react'
//import dependencies for tests
import { render } from '@testing-library/react'
//added router because there are routes in the card container file itself
import { BrowserRouter as Router } from 'react-router-dom'
//import renderer for snapshot
import renderer from 'react-test-renderer'
//import component
import CardContainer from './CardContainer'

//test to check that the app will display when called.
describe('<CardContainer />', () => {
  it('should display', () => {
    //render the component
    render(<Router><CardContainer/></Router>)
    
  })
  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Router><CardContainer/></Router>); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
})