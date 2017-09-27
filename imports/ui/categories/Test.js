import React, {Component} from 'react';

export default class Test extends Component {
  render() {
    return (
      <div className="container marketing">
        <section className="test-section">
          <figure className="text-center category-icon">
            <img src="../img/icons/test.ico" alt="The Pulpit Rock" width="42" height="52" />
            <figcaption>Test</figcaption>
          </figure>

          <div className="row">
            {this.props.renderModules}
          </div>
        </section>
      </div>
    );
  }
};
