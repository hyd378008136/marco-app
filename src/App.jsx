import React from 'react';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

const Loading = <div>Loading...</div>;

const getComponent = (nextState, cb) => {
  const { page } = nextState.match.params;
  const Component = loadable(() => import(`./pages/${page}`), {
    fallback: Loading
  });
  return <Component {...nextState} />;
};

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={'/:page'} component={getComponent} />
        <Redirect to='/home' />
      </Switch>
    </HashRouter>
  );
};

export default App;
