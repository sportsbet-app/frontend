import React from 'react'
//import all dependencies needed
import { render, act } from '@testing-library/react'
import { getElement, shallow } from 'enzyme'
//import renderer for snapshot
import renderer from 'react-test-renderer'
//import the component being tested
import QrCode from './QrCode'

//test data to use for the render
const data = { one: 'http://tester.facebook.com' }

//test to check that the app will display when called.
describe('<QrCode />', () => {
  it('should display', () => {
    //check the render with the test data 
    render(<QrCode bet={data} />)

  })

  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<QrCode bet={data} />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  //check that a qr svg image is created
  it('must display an svg', () => {
    //create render
    const { getByTestId, findByTestId } = render(<QrCode bet={data} />)
    //create variable to be the instance of the container after rendering
    const div = getByTestId('container')
    const page = findByTestId('container')

    act(() => {
      div.getElement('svg')
    })
    //create a variable for the QR code
    const QR = document.getElementsByTagName('*')
    console.log(QR, 'div', div)
    //and check it to be true
    expect(QR)
  })
})
