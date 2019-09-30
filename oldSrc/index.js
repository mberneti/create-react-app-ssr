import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
// redux imports
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

ReactDOM.render(
  <Provider store={configureStore({ count: 1000 })}>
    <Router />
  </Provider>,
  document.getElementById('root')
);