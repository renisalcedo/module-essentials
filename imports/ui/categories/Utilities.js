import React, {Component} from 'react';

export default class Utilities extends Component {
  render() {
    return (
      <div className="container marketing">
        <section className="utilities-section">
          <figure className="text-center category-icon">
            <img src="../img/icons/utilities.ico" alt="The Pulpit Rock" width="42" height="52" />
            <figcaption>Utilities</figcaption>
          </figure>

          <div className="row">
            {this.props.renderModules}
          </div>
        </section>
      </div>
    );
  }
};
