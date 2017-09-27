import React, {Component} from 'react';

export default class Development extends Component {
  render() {
    return (
      <div className="container marketing">
        <section className="development-section">
          <figure className="text-center category-icon">
            <img src="../img/icons/development.ico" alt="The Pulpit Rock" width="42" height="52" />
            <figcaption>Development</figcaption>
          </figure>

          <div className="row">
            {this.props.renderModules}
          </div>
        </section>
      </div>
    );
  }
};
