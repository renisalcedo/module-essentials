// React required libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// App Info Components
import { Modules } from '../api/modules';
import { PageInfo, MyInfo } from '../utils'; // Contains all page related info

// App Components
import NavBar from './NavBar';
import TitleBar from './TitleBar';
import Footer from './Footer';
import Category from './Category';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar description={PageInfo.description} github={MyInfo.github} email={MyInfo.email} />

        <TitleBar description={PageInfo.description} title={PageInfo.title} />

       {/* Sends as a prop the modules data*/}
        <Category modules={Modules.find().fetch()} />

        <Footer title={PageInfo.title} />
      </div>
    );
  }
};

export default App;
