import { combineReducers } from 'redux';
import * as card from './card';
import * as background from './background';

export default combineReducers({
  ...card,
  ...background,
  // Add other reducers here
});