// @flow

import { observable } from 'mobx';

class HomeStore {
  @observable greeting: string = 'Mobx';
}

export default HomeStore;
