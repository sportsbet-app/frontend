import React from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import { colors, buttonSize } from '../../Theme/Variables'
import { favorite } from '../../Actions'

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

const Favorites = props => {

    if (!props.favoriteList.length) return (
        // <FavoritesContainer>
        //     <p>You don't have any favorites selected yet. Please click that badass star that Brandi made to make  a team be a favorite of yours.</p>
        // </FavoritesContainer>
        <></>
    )

    return (
        <FavoritesContainer>
            {props.favoriteList.length && props.favoriteList.map(fav => <Favorite
                pair={fav}
                favorite={props.favorite}
            />)}
        </FavoritesContainer>
    )
}

function Favorite(props) {

    console.log('FAV', props)

    return (
        <FavoriteItem>
            <StarContainer
                liked={props.pair.favorited}
                onClick={_ => props.favorite(props.pair)}
            >{star}
            </StarContainer>
            <GameItem>
                {`${props.pair.first.strTeam} VERSUS ${props.pair.second.strTeam}`}
            </GameItem>
        </FavoriteItem>
    )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { favorite })(Favorites)
