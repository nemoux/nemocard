export const CARD_CHANGE = 'CARD_CHANGE';
export const CARD_OPTION_CHANGE = 'CARD_OPTION_CHANGE';
export const BACKGROUND_CHANGE = 'BACKGROUND_CHANGE';
export const BACKGROUND_SHOW_NEXT = 'BACKGROUND_SHOW_NEXT';
export const BACKGROUND_SHOW_PREV = 'BACKGROUND_SHOW_PREV';
export const BACKGROUND_OPTION_CHANGE = 'BACKGROUND_OPTION_CHANGE';

// ADD other action type here

export function changeCardGeometry(card) {
  return {
    type: CARD_CHANGE,
    card
  }
}

export function showBgNextOne(total) {
  return {
    type: BACKGROUND_SHOW_NEXT,
    total
  }
}

export function showBgPrevOne(total) {
  return {
    type: BACKGROUND_SHOW_PREV,
    total
  }
}