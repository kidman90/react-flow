import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wrapper from './Wrapper';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root: ?Element = document.getElementById('root');

if (root != null) {
  ReactDOM.render(
  <Wrapper>
    <App foo={102} />
    <App  />
  </Wrapper>,
  root
);
  registerServiceWorker();
}
registerServiceWorker();
