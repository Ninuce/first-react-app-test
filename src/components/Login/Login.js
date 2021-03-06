import React, { Component } from 'react';

import './login.css';

class Login extends Component {
state = {
  email: "",
  password: ""
}


onChange = event => {
  this.setState({ [event.target.name]: event.target.value })
}

handleLogin = () => {
  const { email, password } = this.state;
  this.props.login(email, password)
  .then(() => {
    if (this.props.loginReducer.isLogged) {
      console.log("!");
      this.props.history.push("/");
    }
  })
}

  render() {
    return (
      <div className="login">
        <div className="login__content">
        <h1>Please sign in</h1>
          <form>
            <label>Email
              <input type="email" name="email" onChange={this.onChange}></input>
            </label>
            <label>Password
              <input type="password" name="password" onChange={this.onChange}></input>
            </label>
            <button className="btn" type="button" name="button" onClick={this.handleLogin}>
              Sign me in, bro
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
