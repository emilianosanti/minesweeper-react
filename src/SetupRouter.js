import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

// App components
import Setup from './components/setup/container';
import Board from './components/board/container';
import Games from './components/games';

// App constants
import routes from './constants/routes';

function SetupRouter({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.default} component={Setup} />
        <Route exact path={routes.setup} component={Setup} />
        <Route exact path={routes.board} component={Board} />
        <Route exact path={routes.games} component={Games} />
      </Switch>
    </ConnectedRouter>
  );
};

export default SetupRouter;