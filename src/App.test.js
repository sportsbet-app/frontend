import React from 'react'
//import dependencies for tests
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuth0 } from "./Utils/authZero"

//import renderer for snapshot
import renderer from 'react-test-renderer'
//import component
import App from './App'

//test to check that the app will display when called.
describe('<App />', () => {
  it('should display', () => {
    //render the component
    render(<Router><App/></Router>)
    
  })
  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Router><App/></Router>); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
})