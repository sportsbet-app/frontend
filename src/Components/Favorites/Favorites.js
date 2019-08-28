import React from 'react'

import styled from 'styled-components'
import { colors, buttonSize } from '../../Theme/Variables'

const FavoritesContainer = styled.div`
    width: 95%;
    padding: .5rem .5rem;
    margin: 0 auto;
    margin-top: 20px;
    background: ${colors.secondary};
    color: #fff;

    p {
        font-size: 1.2rem;
    }
`


const Favorites = (props) => {

    return (
        <FavoritesContainer>
            <p>You currently do not have any games marked as favorites.  Browse games to mark your favorites.</p>
        </FavoritesContainer>
    )
}

export default Favorites