import React, { Component } from 'react';
import UserCard from "../UserCard";

import './user-list.css';

class UserList extends Component {
  render() {
    return (
      <div className="user-list">
        <UserCard username="Lota"/>
        <UserCard username="Other"/>
        <UserCard username="Another"/>
      </div>
    );
  }
}

export default UserList;
