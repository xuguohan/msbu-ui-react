import 'babel-polyfill';
import 'isomorphic-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import MsbuUi from './pages/msbu-ui';

render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route path="/MsbuUi" component={MsbuUi} />
  </Router>,
  document.getElementById('root')
);
