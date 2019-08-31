import React from 'react'
import { render } from '@testing-library/react'
//import renderer for snapshot
import renderer from 'react-test-renderer'
//import img for test
import nflColorImg2 from '../../Assets/nflColor2.jpg'
import nflColorImg from '../../Assets/nflColor.jpg'

import UGameCard from './UpcomingGameCard'

//create test data for the rendering
const data = {
  first: [{ strTeamBadge: { nflColorImg2 } },
  { strTeam: 'title1' }],
  second: [{ strTeamBadge: { nflColorImg } },
  { strTeam: 'title2' }],
  date: Date.now(),
  time: '3pm eastern'
}

//test to check that the app will display when called.
describe('<UGameCard />', () => {
  it('should display', () => {
    let load = render(<UGameCard />)

  })

  //create a snapshot
  it('matches snapshot', () => {
    const tree = renderer.create(<UGameCard gameInfo={data} />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
})
