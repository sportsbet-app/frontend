import React, { useState } from 'react'
import { StyledButton, Descriptor, Flex, CountDisplay, CountSet } from '../../PropBets/styledComponents'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import { colors, buttonSize } from '../../../Theme/Variables'

const PlayerContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;

`

const TopPlayerCard = styled.div`
display: flex;
flex-direction: column;
background: #fff;
width: 200px;
height: 140px;
margin: 2rem;
`

const TopPlayerCardHeader = styled.div`
display: flex;
flex-direction: row;
align-items: center;
    background: ${colors.darkGrey};
    color: #fff;
    padding-top: .2rem;
    ${'' /* padding-bottom: 4px; */}
    text-align: center;

    h3 {
        font-size: 12px;
    }
    p{
        font-size: 1.2rem;
        margin-top: -10px;
    }
`

const PlayerFavorite = styled.div`
    ${'' /* max-width: 20px; */}
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.darkGrey};
    color: ${props => props.liked ? colors.primary : "#bdbdbd"};
    font-size: 1.2rem;
    ${'' /* padding: .5rem; */}
    width: 30%;

    :hover {
        cursor: pointer;
    }
`

const PlayerInfo = styled.div`
text-align: left;
${'' /* padding-left: .8rem; */}
width: 60%;
`

const star = <FontAwesomeIcon icon={faStar} />

const PlayerCard = props => {


    return (
        <PlayerContainer>
            <TopPlayerCard>
                <TopPlayerCardHeader>
                    <PlayerFavorite>
                        {star}
                    </PlayerFavorite>
                    <PlayerInfo>
                        <h3>{props.player.name}</h3>
                        <p>{props.player.position} | {props.player.team}</p>
                    </PlayerInfo>
                </TopPlayerCardHeader>

            </TopPlayerCard>
        </PlayerContainer>
    )

}

export default PlayerCard