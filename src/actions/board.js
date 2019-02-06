// App constants
import {
  BOARD_NEW_GAME,
  BOARD_GAME_OVER,
  BOARD_OPEN_CELL,
  BOARD_SET_FLAG,
  BOARD_GAME_WIN,
} from '../constants/actionTypes';

// App Actions
import { addGame } from './games';

export function createBoardGame(settings) {
  return {
    type: BOARD_NEW_GAME,
    dataGame: settings,
  };
}

export function gameOverAction(cell) {
  return (dispatch, getState) => {
    dispatch({ type: BOARD_GAME_OVER, cell });
    dispatch(addGame());
  }
};

export function openCellAction(cell) {
  return {
    type: BOARD_OPEN_CELL,
    cell,
  };
};

export function setFlagAction(cell, flagValue) {
  return {
    type: BOARD_SET_FLAG,
    cell,
    flagValue,
  };
};

export function gameWinAction(winValue) {
  return (dispatch, getState) => {
    dispatch({ type: BOARD_GAME_WIN, winValue });
    dispatch(addGame());
  }
};

export function restartGame() {
  return (dispatch, getState) => {
    dispatch(createBoardGame(getState().setup.settings));
  }
}