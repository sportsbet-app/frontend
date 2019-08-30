import React, { useState } from "react";
import styled from 'styled-components'

import { colors } from '../../../Theme/Variables'
import { playerOptions } from '../../../Assets/DummyData'
import PlayerCard from './PlayerCard'

const Container = styled.div`
    width: 100%;
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
    outline: none;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #fff;
    }
    :-ms-input-placeholder {
        color: #fff;
    }
}
`

{/* <LoaderContainer>
    <Loader
        type="ThreeDots"
        color={colors.primary}
        height={80}
        width={80}
    />
</LoaderContainer> */}

const NFLPlayers = () => {

    const [search, setSearch] = useState('')

    return (

        <Container>
            <SearchContainer>
                <input
                    type="text"
                    placeholder="Enter Player Name To Search Players"
                    onChange={e => setSearch(e.target.value)}
                />
            </SearchContainer>
            {search.length ?
                playerOptions.filter(player => player.name.toLowerCase().includes(search.toLowerCase())).map(player => <PlayerCard player={player} />)
                :
                playerOptions.map(player => <PlayerCard player={player} />)}
        </Container>

    )
}

export default NFLPlayers
