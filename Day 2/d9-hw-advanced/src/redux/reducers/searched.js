import { ADD_SEARCH, REMOVE_SEARCH } from "../actions"

const initialState = {
    search: []
}

const searchedReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case REMOVE_SEARCH:
            return {
                ...state,
                search: []
            }    
        default:
            return state
    }
}

export default searchedReducer