import React from 'react'
import { render } from '@testing-library/react'
//import renderer for snapshot
import renderer from 'react-test-renderer'

import BET from './Bet'

//test to check that the app will display when called.
describe('<Bet />', () => {
  it('should display', () => {
    let load = render(<BET/>)
    
  })

  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<BET />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  //check player count of 1
  describe('player count 1', () => {
    //check if data is displayed properly

    //check if button works

  })

  //check player count of 2
  describe('player count 2', () => {
    //check if data is displayed properly

    //check if button works

  })

  //check player count of 3
  describe('player count 3', () => {
    //check if data is displayed properly

    //check if button works
        
  })

})