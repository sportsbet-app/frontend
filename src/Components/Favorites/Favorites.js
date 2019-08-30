import React from 'react'
//import connect for the redux state grab
import { connect } from 'react-redux'
//import styling
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

//function grabbing its props from redux global state
const Favorites = (props) => {
  console.log(props.favoriteList)
  //if a list doesn't exists prompt the user to make one
  if (!props.favoriteList.length) return (
    <FavoritesContainer>
      <p>You don't have any favorites selected yet. Please click that badass star that Brandi made to make  a team be a favorite of yours.</p>
    </FavoritesContainer>
  )
  //otherwise display the list
  return (
    <FavoritesContainer>
      {props.favoriteList.map(fav => <Favorite teamOne={fav.first} teamTwo={fav.second} />)}
    </FavoritesContainer>
  )
}
//items to be displayed in function above
function Favorite(props) {
  return <p>{`${props.teamOne.strTeam} VERSUS ${props.teamTwo.strTeam}`}</p>
}

const mapStateToProps = state => ({ ...state })
//connecting only the global state no functions
export default connect(mapStateToProps)(Favorites)
