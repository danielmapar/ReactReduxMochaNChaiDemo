import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
    // same as state.concat([action.payload])
    // spread operator
      return [...state, action.payload];
    default:
      return state;
  }
}
