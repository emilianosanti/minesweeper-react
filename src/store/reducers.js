import { combineReducers } from 'redux';

// App reducers
import { board, setup } from '../reducers';

const rootReducer = combineReducers({ board, setup });

export default rootReducer;