import React, { Component } from 'react';
import PostCard from "../PostCard";

import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login__content">
        <h1>Please sign in</h1>
          <form>
            <label>Email
              <input type="email"></input>
            </label>
            <label>Password
              <input type="password"></input>
            </label>
            <button className="btn" type="button" name="button">Yes</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
