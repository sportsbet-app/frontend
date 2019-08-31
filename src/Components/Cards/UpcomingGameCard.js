import React from 'react';
//import styling and assets
import styled from 'styled-components'
import nflColorImg from '../../Assets/nflColor2.jpg'
import { colors, buttonSize, breakpoints } from '../../Theme/Variables'


const Card = styled.div`
  width: 28%;
  background-image: url(${nflColorImg});
  background-size: cover;
  margin-bottom: 40px;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background: ${colors.darkGrey};
  padding: .5rem;
  h3 {
    font-size: .8rem;
  }
`

const CardContent = styled.div`
  padding: 1.2rem .5rem;

  .cardContentRow {
    display: flex;
    justify-content: space-around;
    margin: 5px 2px;
    padding: .5rem;
    font-weight: bold;
  }
`

const Badge = styled.img`
  max-width: 50px;
  margin: 0 auto;
`

const Button = styled.button`
  background: ${props => props.primary ? `${colors.primary}` : `${colors.primary}`};
  padding: ${props =>
    props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
  }

  :hover {
    background: ${props => props.primary ? `${colors.secondary}` : `${colors.primary}`};

    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.42);
    transition-timing-function: ease-in-out;
    transition: 0.4s; 
  }
`

//This component Takes in props from the selected sports category to display the information for the upcoming games.
const UGameCard = (props) => {

  console.log(props.gameInfo)

  return (
    <Card>
      <CardHeader>
        {/* badge display of the two teams playing against each other */}
        <Badge
          src={props.gameInfo.first.strTeamBadge}
          title={`${props.gameInfo.first.strTeam}`}
          alt={`${props.gameInfo.first.strTeam}`}
        />
        <div>
          <h3>VERSUS</h3>
          <h3>{props.gameInfo.date} | {props.gameInfo.time}</h3>
        </div>
        <Badge
          src={props.gameInfo.second.strTeamBadge}
          title={`${props.gameInfo.second.strTeam}`}
          alt={`${props.gameInfo.second.strTeam}`}
        />
      </CardHeader>

      <CardContent>
        <div className='cardContentRow'>
          <Button primary medium>+211</Button>
          <Button primary medium>+211</Button>
          <Button primary medium>+211</Button>
        </div>
        <div className='cardContentRow'>
          <Button primary medium>+211</Button>
          <Button primary medium>+211</Button>
          <Button primary medium>+211</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default UGameCard;