import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  hashHistory,
} from 'react-router';
import { Provider } from 'react-redux';

import routes from './store/routes';
import configureStore from './store/configureStore';

const store = configureStore({}); // empty Initial State

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router history={hashHistory} store={store}>
        {routes}
      </Router>
    </Provider>
  </div>
  , document.getElementById('root')
);
