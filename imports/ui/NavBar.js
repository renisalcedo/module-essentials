import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="main-nav">
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">{this.props.description}</p>
              </div>
              <div className="col-sm-4 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li><a href={`https://github.com/${this.props.github}`} className="text-white">Find on github</a></li>
                  <li><a href={`mailto:${this.props.email}`} className="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          <div className="navbar navbar-dark bg-dark">
            <div className="container d-flex justify-content-between">
              <a href="HOME LINK GOES HERE" className="navbar-brand">{this.props.title}</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;
