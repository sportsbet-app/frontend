import React, { useState } from 'react'
import { StyledButton, Descriptor, Flex, CountDisplay, CountSet } from '../../PropBets/styledComponents'


const PlayerCard = props => {



    return (
        <Flex spaceAJ>

            <p>{props.player.name}</p>
            <p>{props.player.position}</p>
            <p>{props.player.team}</p>

        </Flex>
    )

}

export default PlayerCard