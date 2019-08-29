import React from 'react'
//import testing dependencies
import { render, fireEvent } from '@testing-library/react'
//import renderer for snapshot
import renderer from 'react-test-renderer'
//import testing file
import BET from './Bet'

//create test data for the file to use as props
const data = [{
  playerCount: 1,
  playerSelectedOption: { value: 'zero' },
  selectedOption: { value: '0' },
  prop:  'testing',
  count: 3
},
{
  playerCount: 2,
  playerOneSelection: { value: 'one' },
  playerTwoSelection: { value: '1' },
  selectedOption: { value: 'won' },
  prop:  'testing',
  count: 3
},
{
  playerCount: 3,
  playerOneSelection: { value: 'two' },
  playerTwoSelection: { value: '2' },
  playerThreeSelection: { value: 'too' },
  selectedOption: { value: 'tu' },
  prop:  'testing',
  count: 3
},
{
  playerCount: 1,
  playerSelectedOption: { value: 'test' },
  playerOneSelection: { value: 'test' },
  playerTwoSelection: { value: 'test' },
  playerThreeSelection: { value: 'test' },
  prop:  'testing',
  count: 3
}]

//test to check that the app will display when called.
describe('<Bet />', () => {
  it('should display', () => {
    render(<BET bet = {data[0]} />)
    
  })

  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<BET  bet = {data[0]}/>); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  //check player count of 1
  describe('player count 1', () => {
    //check if data is displayed properly
    it('displays data consistent with first if statement', () => {
      //set render as getByText
      const { getByText } = render(<BET bet = { data[0] } />);
      getByText(/testing/i)
      getByText(/zero/i)
    })
    //check if button works
    it('checks that the button can be clicked', () => {
      //create a spy
      let spy = jest.fn()
      //render the component with a spy
      const { getByText } = render(<BET bet = {data[0]} delete = { spy }/>);
      //grab the button 
      const button = getByText(/x/i)
      //fire the button 
      fireEvent.click(button)
      //check if it was called when 'X' is pressed
      expect(spy).toBeCalled()
    })
  })

  //check player count of 2
  describe('player count 2', () => {
    //check if data is displayed properly
    it('displays data consistent with second if statement', () => {
      //set render as getByText
      const { getByText } = render(<BET bet = { data[1] } />);
      getByText(/won/i)
      getByText(/one/i)
    })
    //check if button works
    it('checks that the button can be clicked', () => {
      //create a spy
      let spy = jest.fn()
      //render the component with a spy
      const { getByText } = render(<BET bet = {data[1]} delete = { spy }/>);
      //grab the button 
      const button = getByText(/x/i)
      //fire the button 
      fireEvent.click(button)
      //check if it was called when 'X' is pressed
      expect(spy).toBeCalled()
    })
  })

  //check player count of 3
  describe('player count 3', () => {
    //check if data is displayed properly
    it('displays data consistent with first if statement', () => {
      //set render as getByText
      const { getByText } = render(<BET bet = { data[2] } />);
      getByText(/tu/i)
      getByText(/two/i)
    })
    //check if button works
    it('checks that the button can be clicked', () => {
      //create a spy
      let spy = jest.fn()
      //render the component with a spy
      const { getByText } = render(<BET bet = {data[2]} delete = { spy }/>);
      //grab the button 
      const button = getByText(/x/i)
      //fire the button 
      fireEvent.click(button)
      //check if it was called when 'X' is pressed
      expect(spy).toBeCalled()
    })
  })   

})