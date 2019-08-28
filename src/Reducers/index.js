import { CONFIRM_BET, DELETE_BET, TEAM_DATA_SUCCESS, TEAM_DATA_FAILURE } from "../Actions"

const initialState = {
    bet: {},
    confirmedBets: [],
    nflTeamData: [],
    error: null
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
                error: action.payload
            }
        default:
            return state
    }
}
