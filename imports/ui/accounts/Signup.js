import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    };
  }

  render() {
    return (
      <div className="container jumbotron">
        <form onSubmit={this.onSubmit.bind(this)}> {/* Login Form */}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input ref="username" type="text" className="form-control" placeholder="Enter Username" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input ref="password" type="password" className="form-control"  placeholder="Password" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  // Handles Signup errors
  onSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    let password = this.refs.password.value.trim();

    Accounts.createUser({username, password}, (err) => {
      if(err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: 'Success'});
        console.log('Hi', username);
      }
    });
  }
};

export default Signup;
