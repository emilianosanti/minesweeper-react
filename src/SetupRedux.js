import React from 'react';
import { Provider } from 'react-redux';

function SetupRedux({ store, children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default SetupRedux;