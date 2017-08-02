import * as actionType from '../actions'

export function cards(state = [], action) {
  switch(action.type) {
    // add other actions handled by this reducer
    case actionType.CARD_CHANGE:
      const newState = state.map(card => {
        if (card.id === action.card.id) {
          return action.card;
        }
        return card;
      });
      return newState;
    default: 
      return state;
  }
}

export function cardOption(state = {}, action) {
  switch(action.type) {
    case actionType.CARD_OPTION_CHANGE:
    default: 
      return state;
  }
}