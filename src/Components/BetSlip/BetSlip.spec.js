import React from 'react'
//import dependencies for tests
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
//import renderer for snapshot
import renderer from 'react-test-renderer'
//import the component being tested
import BetSlip from './BetSlip'

//test data to use for the render
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
  selectedOption: {value: 'test' },
  prop:  'testing',
  count: 3
}]

const store = {
  getState: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),

}

const empty = []

//test to check that the app will display when called.
describe('<BetSlip />', () => {
  it('should display', () => {
    //render with test data
    render(<Provider store = { store } ><BetSlip confirmedBets = { data } /></Provider>)
    
  })

  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Provider store = { store }><BetSlip confirmedBets = { data } /></Provider>); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  //test to see if the render works when there is no passed data
  it('returns place a bet sentence', () => {
    const spy = jest.fn()
    //create a get by text render 
    const { getByText } = render(<Provider store = { store }><BetSlip confirmedBets = { empty } delete = { spy } /></Provider>);
    //check that the alternate text displays when no data is found
    expect(getByText(/Please/i))
  })

  //displays the correct information
  it('returns the proper data', () => {
    //create a get by text render 
    const { getByText } = render(<Provider store = { store }><BetSlip confirmedBets = { data } /></Provider>);
    //check if the data is correct
    expect(getByText(/zero/i))
  })
})