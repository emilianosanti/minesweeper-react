import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';

// Combined app reducers.
import reducers from './reducers';

// App initial state.
import { state } from './state';

// App services.
import history from '../services/History';

/**
 * - Add App reducers and default application state tree.
 * - Apply middlewares.
 */
const store = createStore(
  connectRouter(history)(reducers),
  state,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      // Add custom middlewares here.
    ),
  ),
);

export default store;