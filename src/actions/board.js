// App constants
import {
  BOARD_NEW_GAME,
  BOARD_GAME_OVER,
  BOARD_OPEN_CELL,
  BOARD_SET_FLAG,
  BOARD_GAME_WIN,
} from '../constants/actionTypes';

export function createBoardGame(settings) {
  return {
    type: BOARD_NEW_GAME,
    dataGame: settings,
  };
}

export function gameOverAction(cell) {
  return {
    type: BOARD_GAME_OVER,
    cell,
  };
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
  return {
    type: BOARD_GAME_WIN,
    winValue,
  }
};