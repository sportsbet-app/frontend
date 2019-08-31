import React from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbtack } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import { colors, buttonSize } from '../../Theme/Variables'
import { favorite } from '../../Actions'

const FavoritesContainer = styled.div`
    width: 100%;
    background: #f5f5f5;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
    
    p {
        font-size: 1.4rem;
    }
`

const Container = styled.div`
    width: 100%;
    margin: 30px 25px 0px;
    background: #f5f5f5;
    border: 1px solid #ededed;
    color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const PinnedGames = styled.h2`
    color: ${colors.primary};
    width: 100%;
    padding: .75rem 1.25rem;
    margin: 0px;
    font-size: 1rem;
    height: max-content;
    width: max-content;
    background: ${colors.secondary}
`

const FavoriteItem = styled.div`
    display: flex;
    margin: 1.2rem;
    border: 1px solid #ededed;
    width: max-content;

    :hover {
        cursor: pointer;
        box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.42);
        transition-timing-function: ease-in-out;
        transition: 0.4s; 
    }
`

const Wrapper = styled.div`
    display: flex;
    margin: 1.2rem;
    background: whitesmoke;
    width: max-content;
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
    padding: .5rem 1.5rem;
    text-align: center;
    min-width: max-content;
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

    if (!props.favoriteList.length) return <Container>
        <PinnedGames>{pin} My Pinned Games</PinnedGames>
        <FavoritesContainer>
        </FavoritesContainer>
    </Container>

    return (
        <Container>
            <PinnedGames>{pin} My Pinned Games</PinnedGames>
            <FavoritesContainer>
                <Wrapper>
                    {props.favoriteList.length && props.favoriteList.map(fav => <Favorite
                        key={fav.first.idTeam}
                        pair={fav}
                        favorite={props.favorite}
                    />)}
                </Wrapper>
            </FavoritesContainer>
        </Container>
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
