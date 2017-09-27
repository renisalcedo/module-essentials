import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="/">Back to top</a>
          </p>
          <p>{this.props.title}</p>
        </div>
      </footer>
    );
  }
};

export default Footer;
