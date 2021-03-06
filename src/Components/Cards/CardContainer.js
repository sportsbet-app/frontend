
import React from 'react'
import { Link, Route } from "react-router-dom";

//import components being implemented 
// import { UGameCard } from './UpcomingGameCard' //<-- currently not in use
import NFL from "../Sports/NFL"
import MLB from "../Sports/MLB";
import NCAA from "../Sports/NCAA";
import CFL from "../Sports/CFL";
import NBA from "../Sports/NBA";

//import styling
import textureBG from '../../Assets/texture.jpg'
import styled from 'styled-components'
import { colors, buttonSize } from '../../Theme/Variables'


//overall container
const CardHolder = styled.div`
  max-width: 100%;
  background: linear-gradient(to bottom, ${colors.secondary}, #3b4951);
  color: #fff;
`


const Card = styled.div`
  width: 100%;
`

//styling for the page heading/title
const ContainerTitle = styled.div`
background-color: ${colors.primary};
color: #fff;
width: 60%;
max-height: 38px;
display: flex;
align-items: center;
margin-bottom: 40px;
    h2 {
        font-size: 1.4rem;
        padding-left: 1.2rem;
        text-transform: uppercase;
    }
`

const ContainerContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 0;
`

const CardContainer = props => {
  return (
    <CardHolder>
      <Card>
        <ContainerTitle>
          <h2>Quick Bets - NFL</h2>
        </ContainerTitle>
        <ContainerContent>
          <Route path="/nfl" component={NFL} />
          <Route path="/mlb" component={MLB} />
          <Route path="/ncaa" component={NCAA} />
          <Route path="/cfl" component={CFL} />
          <Route path="/nba" component={NBA} />
        </ContainerContent>
      </Card>
    </CardHolder>
  )
}

export default CardContainer