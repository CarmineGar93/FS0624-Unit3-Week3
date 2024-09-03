import { IS_LOADED, IS_LOADING } from "../actions"

const initialState = {
    isLoading: false
}

const loadersReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOADED:
            return {
                ...state,
                isLoading: false
            }
            case IS_LOADING:
                return {
                    ...state,
                    isLoading: true
                }    
        default:
            return state
    }
}

export default loadersReducer