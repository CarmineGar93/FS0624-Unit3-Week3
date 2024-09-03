import {configureStore, combineReducers} from '@reduxjs/toolkit'
import favouritesReducer from '../reducers/favourites'
import adsReducer from '../reducers/ads'
import { persistStore, persistReducer } from 'redux-persist'
import {localStorage} from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    localStorage
}

const mainReducer = combineReducers({
    favourites: favouritesReducer,
    ads: adsReducer
})

const persistedReducer = persistReducer(persistConfig, mainReducer)


    export const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false
            })
        }
    })
    export const persistor = persistStore(store)
    


