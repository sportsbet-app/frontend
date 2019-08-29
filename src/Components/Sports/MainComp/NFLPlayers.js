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
            {playerOptions.map(player => <PlayerCard player={player} />)}
        </Container>

    )
}

export default NFLPlayers;