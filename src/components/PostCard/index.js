import React, { Component } from 'react';

import me from '../../images/me.JPG';
import heart from '../../images/heart.png';
import comment from '../../images/comment.png';
import bookmark from '../../images/bookmark.svg';
import avatar from '../../images/avatar.JPG';
import './card.css';



class PostCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__header">
          <img src={avatar} className="card__avatar" alt="avatar" />
          <h2 className="card__title">{this.props.user}</h2>
            <i class="fab fa-accusoft"></i>


        </div>
        <img src={me} className="card__media" alt="logo" />

        <div className="card__actions">
          <div className="card__actions-interaction">
            <img src={heart} className="card__icon" alt="heart" />
            <img src={comment} className="card__icon" alt="comment" />
          </div>

          <div className="card__actions-personal">
            <img src={bookmark} className="card__icon" alt="bookmark" />
          </div>
        </div>
        <p>{this.props.text}</p>

      </div>
    );
  }
}

export default PostCard;
