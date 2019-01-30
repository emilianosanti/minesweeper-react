import {
  SETUP_SET_GAME_SETTINGS,
} from '../constants/actionTypes';

/**
 * This is the Redux reducer for the store tree key `setup`.
 */
function setup(state = {}, action) {
  if (action.type === SETUP_SET_GAME_SETTINGS) {
    return Object.assign({}, state, { settings: action.value });
  }

  return state;
}

export default setup;