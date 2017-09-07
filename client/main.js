import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Modules } from './../imports/api/modules';
import { PageInfo, MyInfo } from './../imports/utils';

import NavBar from './../imports/ui/NavBar';
import TitleBar from './../imports/ui/TitleBar';
import Footer from './../imports/ui/Footer';
import Category from './../imports/ui/Category';


Meteor.startup(() => {
  Tracker.autorun(() => {
    let modules = Modules.find().fetch();

    console.log(modules);

    var jsx = (
      <div>
        <NavBar description={PageInfo.description} github={MyInfo.github} email={MyInfo.email} />

        <TitleBar description={PageInfo.description} title={PageInfo.title} />

        <Category />

        <Footer title={PageInfo.title} />
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
