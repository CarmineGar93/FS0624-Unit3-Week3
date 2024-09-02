import {configureStore} from '@reduxjs/toolkit'
import mainReducer from '../reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, mainReducer)


    export const store = configureStore({
        reducer: persistedReducer,
    })
    export const persistor = persistStore(store)
    


