import * as actionType from '../actions'

export function currentBackgroundId(state = 0, action) {
  switch(action.type) {
    // add other actions handled by this reducer
    case actionType.BACKGROUND_SHOW_NEXT:
      return (state + 1) % action.total;
    case actionType.BACKGROUND_SHOW_PREV:
      return (state - 1) % action.total;
    default: 
      return state;
  }
}

export function backgrounds(state = [], action) {
  switch(action.type) {
    // add other actions handled by this reducer
    case actionType.BACKGROUND_CHANGE:
      return action.currentId + 1;
    default: 
      return state;
  }
}

export function backgroundOption(state = {}, action) {
  switch(action.type) {
    case actionType.BACKGROUND_OPTION_CHANGE:
    default: 
      return state;
  }
}