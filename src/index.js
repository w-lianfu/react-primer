// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root: any = document.getElementById('root');
if (root !== null)
  ReactDOM.render(<App />, root);

registerServiceWorker();
