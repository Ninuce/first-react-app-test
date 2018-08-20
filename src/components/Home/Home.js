import React, { Component } from 'react';
import Posts from "../Posts";
import UserList from "../UserList";
import Header from "../Header/Header.js";
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="home-main">
          <Posts  />
          <UserList  />
        </div>
      </div>
    );
  }
}

export default Home;
