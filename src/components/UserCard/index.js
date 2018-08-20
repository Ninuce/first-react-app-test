import React, { Component } from 'react';

import './user-card.css';

class UserCard extends Component {
  render() {
    return (
      <div className="user-card">
        <div className="user-card__avatar"></div>
        <span>{this.props.username}</span>
      </div>
    );
  }
}

export default UserCard;
