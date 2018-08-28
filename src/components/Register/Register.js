import React, { Component } from 'react';

import './register.css';

class Register extends Component {
state = {
  email: "",
  username: "",
  password: ""
}
//
//
onChange = event => {
  this.setState({ [event.target.name]: event.target.value })
}

handleRegister = (e) => {
  e.preventDefault();
  const { email, username, password } = this.state;
  this.props.register(email, username, password)
  .then(() => {
    if (this.props.registerReducer.isRegistered) {
      console.log("!");
      this.props.history.push("/login");
    }
  })
}

  render() {
    return (
      <div className="login">
        <div className="login__content">
        <h1>Please register</h1>
          <form>
            <label>Email
              <input type="email" name="email" onChange={this.onChange}></input>
            </label>

            <label>Username
              <input type="username" name="username" onChange={this.onChange}></input>
            </label>

            <label>Password
              <input type="password" name="password" onChange={this.onChange}></input>
            </label>


            <button className="btn" type="button" name="button" onClick={this.handleRegister}>
              Register me, bro
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;
