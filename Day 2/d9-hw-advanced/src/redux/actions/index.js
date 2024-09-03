export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_AD = 'ADD_AD'

export const AddToFavouritesAction = (company) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: company,
    };
};

export const removeFromFavouritesAction = (company) => {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: company,
    };
};

export const retrieveAdsAction = (query) => {
    return async (dispatch) => {
        const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
        try {
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
                const { data } = await response.json();
                dispatch({
                    type: ADD_AD,
                    payload: data
                })
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    };
};
