import React, { Component } from 'react';
import PostCard from "../PostCard";

import './posts.css';

class Posts extends Component {
componentDidMount() {
    this.props.getPosts()
}


  render() {
    console.log(this.props);

    if(!this.props.postsReducer || !this.props.postsReducer.list) {
      return null;
    }

    return (
      <div className="Posts">
        {this.props.postsReducer.list.map((element) => {
          return <PostCard key={element._id} text={element.caption} user="Lota" img={element.media.path} />
          })
        }
      </div>
    )
  }
}

export default Posts;
