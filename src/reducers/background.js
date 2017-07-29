import * as actionTypes from '../actions'

export function currentBackgroundId(state = 0, action) {
  switch(action.type) {
    // add other actions handled by this reducer
    case actionTypes.BACKGROUND_SHOW_NEXT:
      return (state + 1) % action.total;
    case actionTypes.BACKGROUND_SHOW_PREV:
      return (state - 1) % action.total;
    default: 
      return state;
  }
}

export function backgrounds(state = [], action) {
  switch(action.type) {
    // add other actions handled by this reducer
    case actionTypes.BACKGROUND_CHANGE:
      return action.currentId + 1;
    default: 
      return state;
  }
}