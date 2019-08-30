import { CONFIRM_BET, DELETE_BET, TEAM_DATA_SUCCESS, TEAM_DATA_FAILURE, MAKE_FAVORITE, REMOVE_FAVORITE } from "../Actions"

const initialState = {
    bet: {},
    confirmedBets: [],
    nflTeamData: [],
    error: null,
    favoriteList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONFIRM_BET:
            console.log('Bet in redux: ', action.payload)
            return {
                ...state,
                bet: action.payload,
                confirmedBets: [...state.confirmedBets, action.payload].filter(item => {
                    if (Object.keys(item).length !== 0) {
                        return item

                    }

                })
            }
        case DELETE_BET:
            console.log(' in reducer', action.payload)
            return {
                ...state,
                confirmedBets: state.confirmedBets.filter((item, index) => {
                    console.log(item)
                    if (index !== action.payload.id) {
                        return item
                    }

                })
            }
        case TEAM_DATA_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                nflTeamData: action.payload
            }
        case TEAM_DATA_FAILURE:
            console.log(action.payload)
            return {
                ...state,
                error: action.payload
            }
        case MAKE_FAVORITE:
            return {
                ...state,
                favoriteList: [...state.favoriteList, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favoriteList: state.favoriteList.filter(fav => (action.payload.teamOne.idTeam && action.payload.teamTwo.idTeam) !== (fav.first.idTeam && fav.second.idTeam))
            }
        default:
            return state
    }
}
