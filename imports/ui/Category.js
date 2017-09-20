import React, { Component } from 'react';
import {Modules} from '../api/modules';
import PropTypes from 'prop-types';

export default class Category extends Component {
  constructor(props) {
    super(props)
  }

  renderModules() {
    console.log(this.props.modules);
    if(this.props.modules.length > 0) {
      return this.props.modules.map((module, index) => {
        return (
          <div className="col-lg-4" key={index}>
            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
            <h2>{module.category}</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
        );
      });
    } else {
        return (<h1>Loading content ...</h1>);
    }
  }

  render() {
    return (
      <div className="container marketing">
        <section className="development-section">
          <figure className="text-center category-icon">
            <img src="../img/icons/development.ico" alt="The Pulpit Rock" width="42" height="52" />
            <figcaption>Development</figcaption>
          </figure>

          <div className="row">
            {this.renderModules()}
          </div>
        </section>
      </div>
    );
  }
};

Category.propTypes = {
  modules: PropTypes.array.isRequired
};
