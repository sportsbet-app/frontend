import React from 'react'
//import dependencies for tests
import { render, fireEvent, act } from '@testing-library/react'

//import renderer for snapshot
import renderer from 'react-test-renderer'
//import component
import HeadToHead from './HeadToHead'

//create test data to use 
const dataPlayer = { 
  players: 'test',
  playerOneSelection: 'test number 1',
  playerTwoSelection: 'test number 2',
}

const dataBet = {

}

//test to check that the app will display when called.
describe('<HeadToHead />', () => {
  it('should display', () => {
    //render the component
    render(<HeadToHead players = { dataPlayer } setBetSlip = { dataBet } />)
    
  })
  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<HeadToHead players = { dataPlayer } setBetSlip = { dataBet }/>); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  //check if the click works 
  //figure out whats being displayed as the onclick
  // it('clicks properly', () => {
  //   // setup render for the page
  //   const { getByText, findByAltText } = render(<HeadToHead players = { dataPlayer } setBetSlip = { dataBet } playerOneSelection = { dataPlayer.playerOneSelection }/>)
  //   //grab the item being clicked
  //   const click = getByText(/test/i)
  //   //call the function being clicked using act
  //   act( () => {
  //     fireEvent.click(click)
  //   })
  //   //create a variable for the find all to grab the first item
  //   const flip = findByAltText(/test/i)[0].toString()
  //   //check that variable is the player two selection
  //   expect(flip).toBe('test number 2')
  // })
})