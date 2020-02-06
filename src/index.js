import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import loadable from '@loadable/component';

const packageJson = require('../package.json');
const packageName = packageJson.name;
const packageVersion = packageJson.version;

const Loading = (
  <div>
    Loading...
  </div>
);

// Sentry.init({
//   dsn: 'http://da63bf67a8c14e1a8bd60de437bc5e06@122.51.74.87:9000/3',
//   environment: process.env.NODE_ENV,
//   release: packageVersion,
//   beforeSend(event, hint){
//     console.log(event, hint)
//     event.server_name = packageName;
//     // sendWxMsg(event);
//     return event;
//   }
// });

// const sendWxMsg = event => {
//   const id = event.evend_id;
//   const content = (<a href={`http://122.51.74.87:9000/sentry/react/events/${id}`}>查看详情</a>)
//   const users = ['yidih', 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=712d9eca-2f48-46b0-bc77-2544468a4fc8'];
//   const url = 'http://admin.600jit.com/fmsadmin/callback/sendWebchatMsg';
// };

// Sentry.captureMessage('hello world')

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
