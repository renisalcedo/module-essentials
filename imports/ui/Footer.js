import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
          <a href="Link back to top goes here">Back to top</a>
          </p>
          <p>{this.props.title}</p>
        </div>
      </footer>
    );
  }
};
