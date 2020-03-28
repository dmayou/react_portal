import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Portal from './Components/Portal';

import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import showPortal from './redux/reducers';

const store = createStore(
  showPortal,
  applyMiddleware(logger),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Portal />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
