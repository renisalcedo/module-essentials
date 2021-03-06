import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

// Data
import { Modules } from '../imports/api/modules';

// UI
import App from '../imports/ui/App';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/accounts/Login';
import Signup from '../imports/ui/accounts/Signup';

const routes = (
  <Router history={browserHistory} >
    <Route path="/" component={App} />
    <Route path="/login-panel" component={Login} />
    <Route path="/signup-panel" component={Signup} />
    <Route path="*" component={NotFound} />
  </Router>
);

Meteor.startup(() => {
  Tracker.autorun (() => {
    ReactDOM.render(routes, document.getElementById('app'));
  });
});
