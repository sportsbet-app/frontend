import React, { useState, useEffect } from 'react';
import axios from "axios";
import Ticon from "../../Assets/Ticon.png"

import styled from 'styled-components'
import { colors, buttonSize } from '../../Theme/Variables'

const Card = styled.div`
    width: 30%;
    background: ${colors.secondary};
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
  }
`

const Button = styled.button`
    background: ${props => props.primary ? `${colors.primary}` : `${colors.primary}`};
    padding: ${props =>
    props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
  }
`

const UGameCard = (props) => {
  //This component Takes in props from to display the information for the upcoming games.

  return (
    <Card>
      <CardHeader>
        <img src={props.gameInfo.imageone} alt="" />
        <div>
          <h3>VERSUS</h3>
          <h3>{props.gameInfo.date} | {props.gameInfo.time}</h3>
        </div>
        <img src={props.gameInfo.imagetwo} alt="" />
      </CardHeader>

      <CardContent>
        <div className='cardContentRow'>
          <Button primary small>PLACE BETS</Button>
          <Button primary small>PLACE BETS</Button>
          <Button primary small>PLACE BETS</Button>
        </div>
        <div className='cardContentRow'>
          <Button primary small>PLACE BETS</Button>
          <Button primary small>PLACE BETS</Button>
          <Button primary small>PLACE BETS</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default UGameCard;