import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from './initialState.json'

export const configureStore = (preloadedState = initialState) => {
  return createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
};