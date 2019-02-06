import { combineReducers } from 'redux';

// App reducers
import {
  board,
  setup,
  games,
} from '../reducers';

const rootReducer = combineReducers({ board, setup, games });

export default rootReducer;