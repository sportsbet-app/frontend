import React from "react";
import Loader from 'react-loader-spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import { colors, buttonSize } from '../../../Theme/Variables'

import { playerOptions } from '../../../Assets/DummyData'
import PlayerCard from './PlayerCard'

const Container = styled.div`
    width: 100%;
    border: 2px solid cyan;
    display: flex;
    flex-wrap: wrap;
`

const LoaderContainer = styled.div`
    margin-top: 3rem;
    text-align: center;
`

const SearchContainer = styled.div`
width: 100%;
margin: 4rem 2rem;


input {
  width: 500px;
  border: 0;
  height: 40px;
  background: ${colors.secondary};
  font-size: 1.4rem;
  color: #fff;
  border-bottom: 2px dotted ${colors.darkGrey};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fff;
  }
  :-ms-input-placeholder {
    color: #fff;
  }
}
`

const NFLPlayers = () => {

    return (

        <Container>
            {/* <LoaderContainer>
                <Loader
                    type="ThreeDots"
                    color={colors.primary}
                    height={80}
                    width={80}
                />
            </LoaderContainer> */}
            <SearchContainer><input type="text" placeholder="Enter Player Name To Search Players" /></SearchContainer>
            {playerOptions.map(player => <PlayerCard player={player} />)}
        </Container>

    )
}

export default NFLPlayers;