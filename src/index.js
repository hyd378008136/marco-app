import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import loadable from '@loadable/component';

const Loading = (
  <div>
    Loading...
  </div>
)

const getComponent = (nextState, cb) => {
  const { page } = nextState.match.params;
  const Component = loadable(
    () => import(`./pages/${page}`),
    { fallback: Loading }
  );
  return <Component {...nextState}/>;
};

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={'/:page'} component={getComponent} />
      <Redirect to="/home" />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
