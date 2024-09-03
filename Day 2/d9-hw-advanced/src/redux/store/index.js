import {configureStore, combineReducers} from '@reduxjs/toolkit'
import favouritesReducer from '../reducers/favourites'
import adsReducer from '../reducers/ads'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loadersReducer from '../reducers/loaders'

const persistConfig = {
    key: 'root',
    storage
}

const mainReducer = combineReducers({
    favourites: favouritesReducer,
    ads: adsReducer,
    loaders: loadersReducer
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
    


