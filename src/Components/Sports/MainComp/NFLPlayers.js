import React from "react";
import Loader from 'react-loader-spinner'

import styled from 'styled-components'
import { colors, buttonSize } from '../../../Theme/Variables'

import { playerOptions } from '../../../Assets/DummyData'

const Container = styled.div`
    max-width: 100%;
`

const LoaderContainer = styled.div`
    margin-top: 3rem;
    text-align: center;
`

let players = playerOptions.map((player) => {
    console.log(player)
    return player
})

const NFLPlayers = () => {

    return (
        <LoaderContainer>
            <Loader
                type="ThreeDots"
                color={colors.primary}
                height={80}
                width={80}
            />
        </LoaderContainer>


    )

}

export default NFLPlayers;