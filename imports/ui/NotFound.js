// Required React modules
import React, {Component} from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <img src="../img/page-not-found-404.png" alt="404 Not Found Resource" />
        <a href="/">
          <button className="btn btn-primary">Main Page?</button>
        </a>
      </div>
    );
  }
};

export default NotFound;
