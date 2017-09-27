import React, {Component} from 'react';

export default class Connection extends Component {
  render() {
    return (
      <div className="container marketing">
        <section className="connection-section">
          <figure className="text-center category-icon">
            <img src="../img/icons/connection.ico" alt="The Pulpit Rock" width="42" height="52" />
            <figcaption>Connection</figcaption>
          </figure>

          <div className="row">
            {this.props.renderModules}
          </div>
        </section>
      </div>
    );
  }
};
