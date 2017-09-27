import React, {Component} from 'react';

export default class Debugging extends Component {
  render() {
    return (
      <div className="container marketing">
        <section className="Debugging-section">
          <figure className="text-center category-icon">
            <img src="../img/icons/debugging.ico" alt="The Pulpit Rock" width="42" height="52" />
            <figcaption>Debugging</figcaption>
          </figure>

          <div className="row">
            {this.props.renderModules}
          </div>
        </section>
      </div>
    );
  }
};
