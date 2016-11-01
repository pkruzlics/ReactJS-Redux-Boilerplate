import React from 'react';
import { Route } from 'react-router';

import App from '../containers/App.jsx';
import Home from '../containers/Home.jsx';


export default (
  <Route component={App}>
    <Route path="/" component={Home} />
  </Route>
);
