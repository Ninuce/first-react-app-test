import React, { Component } from 'react';

import './overlay.css';

class Overlay extends Component {

  render() {
    return (
      <div id="overlay" className="overlay" onClick={this.props.handleClickOutside}>{this.props.children}</div>
    );
  }
}

export default Overlay;
