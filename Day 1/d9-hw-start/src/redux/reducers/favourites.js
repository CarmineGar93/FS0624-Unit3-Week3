import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions"

const initialState = {
    favourites: []
}

const favouritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_FAVOURITES:
            if(!state.companies.favourites.includes(action.payload)) {
                return {
                    ...state,
                        favourites: [...state.favourites, action.payload]   
                    }
                }
            return state
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                    favourites: state.favourites.filter((fav) => fav !== action.payload)
                }
        default:
            return state
    }
}

export default favouritesReducer