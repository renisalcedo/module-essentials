import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

// Data
import { Modules } from '../imports/api/modules';

// UI
import { PageInfo, MyInfo } from '../imports/utils';
import App from '../imports/ui/App';
import {NotFound} from '../imports/ui/NotFound';

Meteor.startup(() => {
  Tracker.autorun (() => {
    let modules = Modules.find().fetch();

    ReactDOM.render(<App modules={modules} PageInfo={PageInfo} MyInfo={MyInfo}/>, document.getElementById('app'));
  });
});
