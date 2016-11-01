import React, { PropTypes } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = ({ children }) => {
  return (
    <div id="layout">
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

App.defaultPropTypes = {
};

export default App;
