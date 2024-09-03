import { ADD_AD } from "../actions"

const initialState = {
    ads: []
}

const adsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_AD:
            return {
                ...state,
                ads: action.payload
            }
        default:
            return state
    }
}

export default adsReducer