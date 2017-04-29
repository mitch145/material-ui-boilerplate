import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import Theme from './Theme';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={Theme}>
    <App />
  </MuiThemeProvider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
