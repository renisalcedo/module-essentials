import React, {Component} from 'react';

export default class Data extends Component {
  render() {
    return (
      <div className="container marketing">
        <section className="data-section">
          <figure className="text-center category-icon">
            <img src="../img/icons/data.ico" alt="The Pulpit Rock" width="42" height="52" />
            <figcaption>Data</figcaption>
          </figure>

          <div className="row">
            {this.props.renderModules}
          </div>
        </section>
      </div>
    );
  }
};
