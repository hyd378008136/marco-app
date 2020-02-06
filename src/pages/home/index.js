import React from 'react';
import axios from 'axios';
import qs from 'querystring';
import * as Sentry from '@sentry/browser';

class Home extends React.Component {
  state = {

  }

  static getDerivedStateFromProps (props, state) {
    return null;
  }

  componentDidMount () {
    // this.get();
    // this.fetch();
  };

  throwErr = (i) => {
    try {
      throw new Error(`test err${i || new Date().getTime()}`)
    } catch (err) {
      Sentry.captureException(err);
    }
  };

  fetch = () => {
    axios({
      method: 'get',
      url: '/fms-base-rest/rest/xxx'
    }).then(res => {
      console.log(res)
    })
  };

  send = () => {
    axios({
      method: 'post',
      url: 'http://admin.600jit.com/fmsadmin/callback/sendWebchatMsg',
      data: qs.stringify({
        content: 'test',
        users: ['yidih', 'hongq']
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      console.log(res)
    })
  };

  get = () => {
    axios({
      method: 'get',
      url: '/fms-rest/rest/xxx'
    }).then(res => {
      console.log(res)
    })
  }

  render () {
    return (
      <div>
        <div>home</div>
        <div>
          <button onClick={() => this.throwErr(1)}>test1</button>
        </div>
        <div>
          <button onClick={() => this.throwErr(2)}>test2</button>
        </div>
        <div>
          <button onClick={() => this.throwErr(0)}>test3</button>
        </div>
        <div>
          <button onClick={this.send}>send</button>
        </div>
      </div>
    )
  }
}

export default Home;
