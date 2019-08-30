import { CONFIRM_BET, DELETE_BET, TEAM_DATA_START, TEAM_DATA_SUCCESS, 
    TEAM_DATA_FAILURE, TEAM_SUCCESS_START, TEAM_SUCCESS, TEAM_SUCCESS_FAILURE, 
    FAVORITE, REMOVE_FAVORITE } from "../Actions"

const initialState = {
    bet: {},
    confirmedBets: [],
    nflTeamData: [],
    error: null,
    favoriteList: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONFIRM_BET:
            console.log('Bet in redux: ', action.payload)
            return {
                ...state,
                bet: action.payload,
                isLoading: false,
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
                isLoading: false,
                confirmedBets: state.confirmedBets.filter((item, index) => {
                    console.log(item)
                    if (index !== action.payload.id) {
                        return item
                    }

                })
            }

        case TEAM_DATA_START:
            return {
                ...state,
                error: '',
                isLoading: true,
            }
        case TEAM_DATA_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                nflTeamData: action.payload
            }
        case TEAM_DATA_FAILURE:
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case TEAM_SUCCESS_START:
            return {
                ...state,
                error: '',
                isLoading: true,
            }
        case TEAM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                // is this where data should go?
                nflTeamData: action.payload
            }
        case TEAM_SUCCESS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload 
            }
        case FAVORITE:
        
            const newList = [
                ...state.nflTeamData.map(pair => {
                    if (pair.first.idTeam === action.payload.first.idTeam && pair.second.idTeam === action.payload.second.idTeam) {
                        return {
                            ...pair,
                            isLoading: false,
                            favorited: !pair.favorited
                        }
                    }
                    return pair
                })
            ]
            return {
                ...state,
                isLoading: false,
                favoriteList: newList.filter(fav => fav.favorited === true),
                nflTeamData: newList
            }
        default:
            return state
    }
}
