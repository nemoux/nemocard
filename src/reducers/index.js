import { combineReducers } from 'redux';
import { cards } from './card';
import { backgrounds, currentBackgroundId } from './background';

export default combineReducers({
  cards,
  backgrounds,
  currentBackgroundId
  // Add other reducers here
});