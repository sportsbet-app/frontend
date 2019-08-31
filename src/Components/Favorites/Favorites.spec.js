import React from 'react'
//import dependencies for tests
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

//import renderer for snapshot
import renderer from 'react-test-renderer'
//import component
import FavoritesContainer from './Favorites'

//test data to use for all test
const data = [
  {first: 'a team',
  teamOne: {strTeam: 'first image'},
  second: 'another team',
  teamTwo: {strTeam: 'some image'},
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn() }
  
]

//test to check that the app will display when called.
describe('<FavoritesContainer />', () => {
  it('should display', () => {
    //render the component
    render(<Provider store = {data[0]}><FavoritesContainer favoriteList = {data}/></Provider>)
    
  })

  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<Provider store = {data[0]}><FavoritesContainer favoriteList = {data}/></Provider>)
    
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  //data displays properly
})