// App APIs
import GameApi from '../APIs/game';

// App constants
import {
  BOARD_NEW_GAME,
  BOARD_GAME_OVER,
  BOARD_OPEN_CELL,
  BOARD_SET_FLAG,
  BOARD_GAME_WIN,
} from '../constants/actionTypes';

/**
 * This is the Redux reducer for the store tree key `board`.
 */
function board(state = {}, action) {
  if (action.type === BOARD_NEW_GAME) {
    return {
      ...state,
      grid: GameApi.startGame(action.dataGame),
      bombsQuantity: action.dataGame.bombs,
      gameOver: false,
      gameWin: false,
    };
  } else if (action.type === BOARD_GAME_OVER) {
    return {
      ...state,
      grid: GameApi.gameOver(state.grid, action.cell),
      gameOver: true,
    };
  } else if (action.type === BOARD_OPEN_CELL) {
    return {
      ...state,
      grid: GameApi.openCell(state.grid, action.cell),
    };
  } else if (action.type === BOARD_SET_FLAG) {
    return {
      ...state,
      grid: GameApi.setFlag(state.grid, action.cell, action.flagValue),
      flagsQuantity: action.flagValue ? state.flagsQuantity + 1 : state.flagsQuantity - 1,
    };
  } else if (action.type === BOARD_GAME_WIN) {
    return {
      ...state,
      grid: GameApi.gameOver(state.grid),
      gameWin: action.winValue,
    };
  }

  return state;
}

export default board;
