import React from 'react';

// App components
import SetupRedux from './SetupRedux';
import SetupRouter from './SetupRouter';
import App from './App';

// App store
import store from './store/SetupStore';

// App services
import history from './services/History';

/**
 * Application entry point, This component instantiate the `SetupRedux` HOC and the `SetupRouter` in order
 * to boot the application. These components were separated to group and decouple the logic.
 */
function Root() {
  return (
    <SetupRedux store={store}>
      <App>
        <SetupRouter history={history} />
      </App>
    </SetupRedux>
  );
}

export default Root;
