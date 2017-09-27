import React, {Component} from 'react';

export default class Templating extends Component {
  render() {
    return (
      <div className="container marketing">
        <section className="templating-section">
          <figure className="text-center category-icon">
            <img src="../img/icons/templating.ico" alt="The Pulpit Rock" width="42" height="52" />
            <figcaption>Templating</figcaption>
          </figure>

          <div className="row">
            {this.props.renderModules}
          </div>
        </section>
      </div>
    );
  }
};
