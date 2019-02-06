// App constants
import { GAMES_ADD_GAME } from '../constants/actionTypes';

/**
 * It adds a new game to the games list.
 */
export function addGame() {
  return (dispatch, getState) => {
    const {
      setup: { settings: { columns, bombs, rows, startTimestamp }},
      board: { bombsQuantity, flagsQuantity, gameWin },
    } = getState();
    // It gets the current timestamp to calculate the game time spent.
    const finishTimestamp = Date.now();
    const newGameData = {
      columns,
      bombs,
      rows,
      bombsQuantity,
      flagsQuantity,
      finishTimestamp,
      startTimestamp,
      gameWin,
    };
    dispatch({ type: GAMES_ADD_GAME, newGameData });
  }
}
