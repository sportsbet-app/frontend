import React from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbtack } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import { colors, buttonSize } from '../../Theme/Variables'
import { favorite } from '../../Actions'

const FavoritesContainer = styled.div`
    width: 97%;
    padding: .5rem .5rem;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 30px;
    background: #f5f5f5;
    border: 1px solid #ededed;
    color: #fff;
    display: flex;
    flex-wrap: wrap;

    h2 {
        color: ${colors.primary};
        width: 100%;
        padding-left: .75rem;
    }
    p {
        font-size: 1.4rem;
    }
`

const FavoriteItem = styled.div`
    display: flex;
    margin: 1.2rem;
    border: 1px solid #ededed;

    :hover {
        cursor: pointer;
        box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.42);
        transition-timing-function: ease-in-out;
        transition: 0.4s; 
    }
`

const StarContainer = styled.div`
color: ${props => props.liked ? colors.primary : "#bdbdbd"};
background: ${colors.darkGrey};
display: flex;
align-items: center;
padding: .5rem;
`

const GameItem = styled.div`
    background: #fff;
    color: ${colors.secondary};
    font-size: 1.4rem;
    padding: .5rem .5rem;
    text-align: center;
    min-width: 220px;
`
const Team1 = styled.div`
    font-weight: bold;
`
const Team2 = styled.div`
 font-weight: bold;
`
const Vs = styled.div`
    font-size: .8rem;
    padding: .25rem 0;
`

const star = <FontAwesomeIcon icon={faStar} />
const pin = <FontAwesomeIcon icon={faThumbtack} />

const Favorites = props => {

    if (!props.favoriteList.length) return (
        // <FavoritesContainer>
        //     <p>You don't have any favorites selected yet. Please click that badass star that Brandi made to make  a team be a favorite of yours.</p>
        // </FavoritesContainer>
        <></>
    )

    return (
        <FavoritesContainer>
            <h2>{pin} My Pinned Games</h2>
            {props.favoriteList.length && props.favoriteList.map(fav => <Favorite
                key={fav.first.idTeam}
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
            >{pin}
            </StarContainer>
            <GameItem>
                <Team1>{props.pair.first.strTeam}</Team1>
                <Vs>VERSUS</Vs>
                <Team2>{props.pair.second.strTeam}</Team2>
            </GameItem>
        </FavoriteItem>
    )

}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { favorite })(Favorites)
