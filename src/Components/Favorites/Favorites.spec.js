import React from 'react'
//import dependencies for tests
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

//import renderer for snapshot
import renderer from 'react-test-renderer'
//import component
import FavoritesContainer from './Favorites'

//test data to use for all test
const data = [{
  first:  {strTeam: 'first image'},
  second:  {strTeam: 'some image'},
}]

const store = {
  getState: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),

}

const empty = []

//test to check that the app will display when called.
describe('<FavoritesContainer />', () => {
  it('should display', () => {
    //render the component
    render(<Provider store = { store }><FavoritesContainer favoriteList = {data}/></Provider>)
    
  })

  //create a snapshot
  it('matches snapshot', () => {
    //create render variable
    const tree = renderer.create(<Provider store = { store }><FavoritesContainer favoriteList = {data}/></Provider>)
    
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  //data displays properly
  it('displays proper content', () => {
    //create render with get by text to perform the search
    const { getByText } = render(<Provider store = { store }><FavoritesContainer favoriteList = {data} /></Provider>)
    //check to see if the data is displayed from the .map
    expect(getByText(/some image/i))
  })

  //check that the item will show that favorites haven't been selected
  it('should show that you need to add items to favorites', () =>{
    //create a render variable with an empty array
    const { getByText } = render(<Provider store = { store }> <FavoritesContainer favoriteList = { empty } /></Provider>)
    //check that the empty array brings back the proper information
    getByText(/you don't/i)
  })
})