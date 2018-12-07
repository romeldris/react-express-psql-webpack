import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from './util/Store';
import Home from './containers/Home';
import './styles/main.less';

const store = configureStore();

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);
