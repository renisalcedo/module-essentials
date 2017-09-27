import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

import Development from './categories/Development';
import Test from './categories/Test.js';
import Utilities from './categories/Utilities.js';
import Debugging from './categories/Debugging.js';
import Data from './categories/Data.js';
import Connection from './categories/Connection.js';
import Templating from './categories/Templating.js';

const data = [
  {
    development: [
      {_id: "1", name: "ExpressJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
      {_id: "1", name: "ExpressJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
      {_id: "1", name: "ExpressJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
            {_id: "1", name: "ExpressJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
      {_id: "1", name: "ExpressJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
      {_id: "1", name: "ExpressJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"}
    ],
    test: [
      {_id: "2", name: "Mocha", description: "blabla", img: "img-logo", moduleUrl: "http"},
      {_id: "2", name: "Mocha", description: "blabla", img: "img-logo", moduleUrl: "http"},
{_id: "2", name: "Mocha", description: "blabla", img: "img-logo", moduleUrl: "http"},
{_id: "2", name: "Mocha", description: "blabla", img: "img-logo", moduleUrl: "http"},
{_id: "2", name: "Mocha", description: "blabla", img: "img-logo", moduleUrl: "http"}




    ],
    utilities: [
      {_id: "1", name: "UtilityJs", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
{_id: "1", name: "UtilityJs", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
{_id: "1", name: "UtilityJs", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
{_id: "1", name: "UtilityJs", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
{_id: "1", name: "UtilityJs", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
      {_id: "1", name: "UtilityJs", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"}





    ],
    debugging: [
      {_id: "2", name: "DebuggingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
{_id: "2", name: "DebuggingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
{_id: "2", name: "DebuggingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
{_id: "2", name: "DebuggingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
{_id: "2", name: "DebuggingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
{_id: "2", name: "DebuggingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
{_id: "2", name: "DebuggingJS", description: "blabla", img: "img-logo", moduleUrl: "http"}






    ],
    data: [
      {_id: "1", name: "DataJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
{_id: "1", name: "DataJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
{_id: "1", name: "DataJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
{_id: "1", name: "DataJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
{_id: "1", name: "DataJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"},
{_id: "1", name: "DataJS", description: "blablba", img: "img-logo", moduleUrl: "https://github.com/expressjs/express"}

    ],
    connection: [
      {_id: "2", name: "ConnectionJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
      {_id: "2", name: "ConnectionJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
      {_id: "2", name: "ConnectionJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
      {_id: "2", name: "ConnectionJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
      {_id: "2", name: "ConnectionJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
    ],
    templating: [
      {_id: "2", name: "TemplatingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
      {_id: "2", name: "TemplatingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
      {_id: "2", name: "TemplatingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
      {_id: "2", name: "TemplatingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
      {_id: "2", name: "TemplatingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
      {_id: "2", name: "TemplatingJS", description: "blabla", img: "img-logo", moduleUrl: "http"},
    ]

  }
];

const Categories = {
  development: data[0].development,
  test: data[0].test,
  utilities: data[0].utilities,
  debugging: data[0].debugging,
  data: data[0].data,
  connection: data[0].connection,
  templating: data[0].templating
};

class Category extends Component {
  constructor(props) {
    super(props)
  }

  renderModules(modules) {
    return modules.map((module, index) => {
      return (
        <div className="col-lg-4" key={index}>
          <img className="rounded-circle" src={module.img} width="140" height="140" />
          <h2>{module.name}</h2>
          <p>{module.description}</p>
          <p><a className="btn btn-secondary" href={module.moduleUrl} role="button">View details &raquo;</a></p>
        </div>
      );
    });
  }

  render() {
    if(this.props.modules.length < 1) {
      return (
        <ReactLoading className='spinner text-center' type="spinningBubbles" color="#33b5e5" />
      );
    }
    return (
      <div className="text-center" >
        <Development renderModules={this.renderModules(Categories.development)} />

        <Test renderModules={this.renderModules(Categories.test)} />

        <Utilities renderModules={this.renderModules(Categories.utilities)} />

        <Debugging renderModules={this.renderModules(Categories.debugging)} />

        <Data renderModules={this.renderModules(Categories.data)} />

        <Connection renderModules={this.renderModules(Categories.connection)} />

        <Templating renderModules={this.renderModules(Categories.templating)} />

      </div>
    );
  }
};

Category.propTypes = {
  modules: PropTypes.array.isRequired
};

export default Category;
