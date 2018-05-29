import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root: ?Element = document.getElementById('root');

if (root != null) {
  ReactDOM.render(
  <div>foo={102}
    <App />
    <App  />
  </div>,
  root
);
  registerServiceWorker();
}
registerServiceWorker();
