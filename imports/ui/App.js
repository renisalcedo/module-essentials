import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modules } from './../api/modules';
import { PageInfo, MyInfo } from './../utils';

import NavBar from './NavBar';
import TitleBar from './TitleBar';
import Footer from './Footer';
import Category from './Category';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar description={this.props.PageInfo.description} github={this.props.MyInfo.github} email={this.props.MyInfo.email} />

        <TitleBar description={this.props.PageInfo.description} title={this.props.PageInfo.title} />

        <Category modules={this.props.modules} />

        <Footer title={this.props.PageInfo.title} />
      </div>
    );
  }
};

App.propTypes = {
  modules: PropTypes.array.isRequired,
  PageInfo: PropTypes.object.isRequired,
  MyInfo: PropTypes.object.isRequired
};
