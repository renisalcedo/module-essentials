import React, { Component } from 'react';

class TitleBar extends Component {
  render() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">{this.props.title}</h1>
          <p className="lead text-muted">{this.props.description}</p>
          <div>
            <div className="search-bar">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default TitleBar;
