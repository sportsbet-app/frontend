import React, { useState } from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import { colors, buttonSize } from '../../Theme/Variables'
import { makeFavorite, removeFavorite } from '../../Actions'

const FavoritesContainer = styled.div`
    width: 96%;
    padding: .5rem .5rem;
    margin: 0 auto;
    margin-top: 20px;
    background: ${colors.secondary};
    color: #fff;

    p {
        font-size: 1.2rem;
    }
`

const FavoriteItem = styled.div`
    display: flex;
`
const StarContainer = styled.div`
color: ${props => props.liked ? colors.primary : "#bdbdbd"};
`

const GameItem = styled.div`

`
const star = <FontAwesomeIcon icon={faStar} />

const Favorites = (props) => {

    console.log(props.favoriteList)

    if (!props.favoriteList.length) return (
        // <FavoritesContainer>
        //     <p>You don't have any favorites selected yet. Please click that badass star that Brandi made to make  a team be a favorite of yours.</p>
        // </FavoritesContainer>
        <></>
    )

    return (
        <FavoritesContainer>
            {props.favoriteList.map(fav => <Favorite teamOne={fav.first} teamTwo={fav.second} removeFavorite={props.removeFavorite} />)}
        </FavoritesContainer>
    )
}

function Favorite(props) {
    console.log('favprops', props)
    const [liked, setLiked] = useState(true)

    return (
        <FavoriteItem>
            <StarContainer liked={liked} onClick={() => {
                setLiked(!liked)
                { props.removeFavorite(props) }
            }}>{star}
            </StarContainer>
            <GameItem>
                {`${props.teamOne.strTeam} VERSUS ${props.teamTwo.strTeam}`}
            </GameItem>
        </FavoriteItem>
    )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { makeFavorite, removeFavorite })(Favorites)
