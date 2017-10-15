import { Meteor } from 'meteor/meteor';

// React dependencies
import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    // Error handling state
    this.state = {
      error: ''
    };
  }

  // Handles Signin from form
  onSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    let password = this.refs.password.value.trim();

    // Will login by password to identify user
    Meteor.loginWithPassword({username}, password, (err) => {
      if(err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: 'Sucess' });
        console.log(username);
      }
    });
  }

  // FORM uses username and password for login
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
}

export default Login;
