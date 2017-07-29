import { CARD_CHANGE } from '../actions'

export function cards(state = [], action) {
  switch(action.type) {
    // add other actions handled by this reducer
    case CARD_CHANGE:
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