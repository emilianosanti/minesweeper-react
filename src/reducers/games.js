import {
  GAMES_ADD_GAME,
} from '../constants/actionTypes';

/**
 * This is the Redux reducer for the store tree key `games`.
 */
function games(state = {}, action) {
  if (action.type === GAMES_ADD_GAME) {
    return { data: [...state.data, action.newGameData] };
  }

  return state;
}

export default games;