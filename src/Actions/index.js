//import dependency
import axios from 'axios'

//export types to reducers
import urls from '../Assets/urls'
const { CFL, NBA, NCAA, NFL, MLB, players } = urls

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
export const TEAM_DATA_SUCCESS = 'TEAM_DATA_SUCCESS'
export const TEAM_DATA_FAILURE = 'TEAM_DATA_FAILURE'
export const CONFIRM_BET = 'CONFIRM_BET'
export const DELETE_BET = 'DELETE_BET'
export const TEAM_SUCCESS = 'TEAM-SUCCESS'

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

  //maybe add a switch case for the different sports to see which sport is asked for in the  instance this is called
  axios
    .get(NFL)
    .then(res => {
      console.log('nfl team data', res.data)
      dispatch({ type: TEAM_DATA_SUCCESS, payload: res.data.teams })
    })
    .catch(err => {
      dispatch({ type: TEAM_DATA_FAILURE, payload: err.response })
    })

}

//action to grab a specific player
export const team = id => dispatch => {

  //use this in the teamData as well?
  axios
    .get(`${players}${id}`)
    .then(res => {
      console.log('team action', res.data)
      dispatch({ type: TEAM_SUCCESS, payload: res.data })
    })

}

//function to place bet on selected item through action dispatch
export const confirmBet = bet => ({ type: CONFIRM_BET, payload: bet })

//function to delete selected bet by ID through action dispatch
export const deleteBet = (bet, id) => ({ type: DELETE_BET, payload: { bet, id } })
