// @flow
import * as React from 'react';
import { observer } from 'mobx-react';
import { SearchBar } from 'antd-mobile';

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
        <SearchBar placeholder="请输入快递单号" />
        <p><span>Hello, Flow!</span></p>
        <p>Hello!</p>
        <p>{this.state.count}</p>
        <p>Hello, {homeStore.greeting}</p>
        <ul>
          <li>Vue</li>
          <li>Angular</li>
        </ul>
        <p><label>Hello</label></p>
        <i className="material-icons">settings</i>
      </div>
    )
  }
}

export default Home;
