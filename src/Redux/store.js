import { configureStore, combineReducers } from '@reduxjs/toolkit'
import soloReducer from './reducers/soloReducer'
import loginReducer from './reducers/loginReducer'
import filmsReducer from './reducers/filmsReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  solo: soloReducer,
  login: loginReducer, 
  films: filmsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store);
//github trying to connect it or that is something wrong//?