import React from 'react';
import { Routes } from './menu';

export default class Routers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      routersArr: []
    }
  }

  componentWillMount () {
    this.init();
  }

  init = () => {
    const routersArr = [];
    this.loop(Routes, routersArr);
    this.setState({
      routersArr
    })
  };

  loop = (list, arr) => {
    return list.map(item => {
      if (item.sub && item.sub.length) {
        this.loop(item.sub, arr)
      }
      if (item.url.includes('/membership-front/')) {
        arr.push(item)
      }
    });
  };

  render () {
    const { routersArr } = this.state;
    console.log(routersArr)
    return (
      <div>
        {routersArr.map(router => (
          <div>
            <div>名称：{router.dsp}</div>
            <div>位置：{router.fullDsp}</div>
            <div>路由：{router.url}</div>
            <br />
          </div>
        ))}
      </div>
    )
  }
}
