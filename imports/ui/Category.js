import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

import Development from './categories/Development';
const data = [
  {
    development: [
      {_id: "1", category: "This is working"}
    ]
  }
];

const development = data[0].development;

class Category extends Component {
  constructor(props) {
    super(props)
  }

  renderModules(modules) {
    return modules.map((module, index) => {
      return (
        <div className="col-lg-4" key={index}>
          <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
          <h2>{module.category}</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
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
      <Development renderModules={this.renderModules(development)}  />
    );
  }
};

Category.propTypes = {
  modules: PropTypes.array.isRequired
};

export default Category;
