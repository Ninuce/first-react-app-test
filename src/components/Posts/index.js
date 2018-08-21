import React, { Component } from 'react';
import PostCard from "../PostCard";

import './posts.css';

class Posts extends Component {
  render() {
    return (
      <div className="Posts">
        <PostCard text="some text" user="Lota" />
        <PostCard text="some longer text some longer text some longer text some longer text some longer text some longer text some longer text some longer text" user="Ninuce" />
      </div>
    );
  }
}

export default Posts;
