// Store/configureStore.js

import { createStore } from 'redux'
import toggleFavorite from './Reducers/favoriteReducer'
//import setAvatar from './Reducers/avatarReducer'
import { persistCombineReducers, persistReducer  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: storage
}
const persistedReducer = persistReducer(persistConfig, toggleFavorite)

export default createStore(persistedReducer)

//export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite, setAvatar}))
//export default createStore(toggleFavorite)