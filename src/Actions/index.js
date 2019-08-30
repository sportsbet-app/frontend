//import dependency
import axios from 'axios'

//export types to reducers
import urls from '../Assets/urls'
const { CFL, NBA, NCAA, NFL, MLB, players } = urls

export const
  FETCH_DATA_START = 'FETCH_DATA_START',
  FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE',
  TEAM_DATA_START = 'TEAM_DATA_START',
  TEAM_DATA_SUCCESS = 'TEAM_DATA_SUCCESS',
  TEAM_DATA_FAILURE = 'TEAM_DATA_FAILURE',
  CONFIRM_BET = 'CONFIRM_BET',
  DELETE_BET = 'DELETE_BET',
  TEAM_SUCCESS_START = 'TEAM_SUCCESS_START',
  TEAM_SUCCESS = 'TEAM_SUCCESS',
  TEAM_SUCCESS_FAILURE = 'TEAM_SUCCESS_FAILURE',
  FAVORITE = 'FAVORITE'

export const getData = sport => dispatch => {

  dispatch({ type: sport })
  //AJAX call to get sport data
  axios
    .get(`http://jservice.io/api/random`)
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response })
    })

}

//action to get specified sports data
export const teamData = _ => dispatch => {

  dispatch({ type: TEAM_DATA_START })

  axios
    .get(NFL)
    .then(res => {
      const teams = []
      for (let i = 0; i < res.data.teams.length - 1; i += 2) {
        teams.push({
          first: res.data.teams[i],
          second: res.data.teams[i + 1],
          favorited: false
        })
      }
      dispatch({ type: TEAM_DATA_SUCCESS, payload: teams })
    })
    .catch(err => {
      dispatch({ type: TEAM_DATA_FAILURE, payload: err.response })
    })

}

//action to grab a specific player
export const team = id => dispatch => {

  dispatch({ type: TEAM_SUCCESS_START })

  axios
    .get(`${players}${id}`)
    .then(res => {
      console.log('team action', res.data)
      dispatch({ type: TEAM_SUCCESS, payload: res.data })
    })
    .catch(err => ({ type: TEAM_SUCCESS_FAILURE, payload: err.response }))

}

//function to place bet on selected item through action dispatch
export const confirmBet = bet => ({ type: CONFIRM_BET, payload: bet })

//function to delete selected bet by ID through action dispatch
export const deleteBet = (bet, id) => ({ type: DELETE_BET, payload: { bet, id } })

export const favorite = game => ({ type: FAVORITE, payload: game })
