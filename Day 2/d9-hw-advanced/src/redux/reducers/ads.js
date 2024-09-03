import { ADD_AD } from "../actions"
import { REMOVE_AD } from "../actions"

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
        case REMOVE_AD:
            return {
                ...state,
                ads: []
            }   
        default:
            return state
    }
}

export default adsReducer