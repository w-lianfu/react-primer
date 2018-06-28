import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button } from 'antd-mobile';

import './module/index.scss';
import HomeStore from './module/store';

const homeStore = new HomeStore();

@observer
class Home extends Component {
  render() {
    return (
      <div>
        <p>Home Page...</p>
        <p>Hello!</p>
        <h3>Hello, {homeStore.greeting}</h3>
        <i className="material-icons">settings</i>
        <Button type="primary">穿越去</Button>
      </div>
    )
  }
}

export default Home;
