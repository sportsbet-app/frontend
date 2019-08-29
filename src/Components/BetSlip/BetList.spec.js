import React from 'react'
import { render } from '@testing-library/react'
//import renderer for snapshot
import renderer from 'react-test-renderer'

import betList from './BetList'

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
describe('<betList />', () => {
  it('should display', () => {
    //check the render with the test array data 
    render(<betList bet = {data}/>)
    
  })
  //create a snapshot
  it('matches snapshot', () => {
  const tree = renderer.create(<betList bet = {data}/>); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
})