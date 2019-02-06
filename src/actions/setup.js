import { push } from 'connected-react-router';

// Action types Constant
import { SETUP_SET_GAME_SETTINGS } from '../constants/actionTypes';

// App Actions
import { createBoardGame } from './board';

// Routes Constant
import routes from '../constants/routes';

export function startGame(settings) {
  return dispatch => {
    const startTimestamp = Date.now();
    dispatch(setSettingData({...settings, startTimestamp}));
    dispatch(createBoardGame(settings));
    dispatch(push(routes.board));
  }
}

export function setSettingData(settings) {
  return {
    type: SETUP_SET_GAME_SETTINGS,
    value: settings,
  };
}