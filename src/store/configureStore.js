import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from './initialState.json'

export const configureStore = (preloadedState = initialState) => {
  return createStore(
    rootReducer,
    preloadedState
  )
};