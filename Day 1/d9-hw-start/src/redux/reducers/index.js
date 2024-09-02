const initialState = {
    companies: {
        favourites: []
    }
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_FAVOURITES':
            if(!state.companies.favourites.includes(action.payload)) {
                return {
                    ...state,
                    companies: {
                        ...state.companies,
                        favourites: [...state.companies.favourites, action.payload]
    
                    }
                }
            }
            return state
        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...state,
                companies: {
                    ...state.companies,
                    favourites: state.companies.favourites.filter((fav) => fav !== action.payload)
                }
            }    
        default:
            return state
    }
}

export default mainReducer