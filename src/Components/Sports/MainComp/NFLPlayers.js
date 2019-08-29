import React from "react";
import Loader from 'react-loader-spinner'
import {playerOptions} from "../../../../src/Assets/DummyData";
import PlayerCard from "./playercard";

import styled from 'styled-components'
import { colors, buttonSize } from '../../../Theme/Variables'

const Container = styled.div`
    max-width: 100%;
`

const LoaderContainer = styled.div`
    margin-top: 3rem;
    text-align: center;
`

const NFLPlayers = () => {
    if(playerOptions.length === 0) {
        return (
            <LoaderContainer>
                <Loader
                    type="ThreeDots"
                    color={colors.primary}
                    height={80}
                    width={80}
                />
            </LoaderContainer>
    )} else {
        return (
            <div>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <h3>Player</h3><h3>Team</h3><h3>Position</h3>
                </div>
                <div>
                    {playerOptions.map(el=> <PlayerCard player={el}/>)}
                </div>
            </div>
        )

    }

}

export default NFLPlayers;