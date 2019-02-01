import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

// Combined app reducers.
import reducers from './reducers';

// Local Storage module
import { loadState, saveState } from './localStorage';

// App initial state.
import { state } from './state';

// App services.
import history from '../services/History';

/**
 * It provides the application state to be rehydrated with the local storage.
 */
const getInitialState = () => {
  const persistedState = loadState();

  if (persistedState) {
    return Object.assign({}, state, persistedState);
  }

  return state;
}

/**
 * - Add App reducers and default application state tree.
 * - Apply middlewares.
 */
const store = createStore(
  connectRouter(history)(reducers),
  getInitialState(),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      // Add custom middlewares here.
    ),
  ),
);

/**
 * Subscribe to all the store changes to update `board` local store key.
 * @TODO: Improve this logic, this is not scalable. It works fine because is a small application,
 * but in a large application it will produce critical performance issues. Add whitelisted/blacklisted keys,
 * check for store differences or directly make usage of some redux lib like `redux-persist`.
 */
store.subscribe(() => {
  saveState({ board: store.getState().board });
});


export default store;