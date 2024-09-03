export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'

export const AddToFavouritesAction = (company) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: company
    }
}

export const removeFromFavouritesAction = (company) => {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: company
      }
}