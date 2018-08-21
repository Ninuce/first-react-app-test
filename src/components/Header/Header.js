import React, { Component } from 'react';

import './header.css';
import '../../css/general.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <span>Lotagram</span>
        <div className="header__actions">
          <button className="btn" type="button" name="button" onClick={this.props.showModal}>Create a post</button>
          <button className="btn" type="button" name="button">Other button</button>
        </div>
      </div>
    );
  }
}

export default Header;
