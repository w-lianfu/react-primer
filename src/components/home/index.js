// @flow

import * as React from 'react';
import { observer } from 'mobx-react';
import { Button } from 'antd-mobile';

import './module/index.scss';
import HomeStore from './module/store';

const homeStore = new HomeStore();

type Props = {
  num: number;
}
type State = {
  count: number;
}

@observer
class Home extends React.Component<Props, State> {
  state = {
    count: 99
  };

  render() {
    return (
      <div>
        <p>Home Page...</p>
        <p>Hello!</p>
        <p>{this.state.count}</p>
        <h3>Hello, {homeStore.greeting}</h3>
        <i className="material-icons">settings</i>
        <Button type="primary">穿越去</Button>
      </div>
    )
  }
}

export default Home;
