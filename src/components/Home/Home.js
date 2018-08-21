import React, { Component } from 'react';
import Posts from "../Posts";
import UserList from "../UserList";
import Header from "../Header/Header.js";
import Modal from "../Modal/Modal.js";
import Overlay from "../Overlay/Overlay.js";
import './home.css';

class Home extends Component {

  state = {
    isModalOpen: false
  }

  showModal = () => {
    this.setState({isModalOpen: true});
  }

  hideModal = () => {
    this.setState({isModalOpen: false})
  }

  handleClickOutside = event => {
    if(event.target.id === "overlay") {
      this.setState({isModalOpen: false})
    }
  }

  render() {
    return (
      <div className="home">
        <Header showModal={this.showModal} />
        <div className="home-main">
          <Posts  />
          <UserList  />
        </div>
        { this.state.isModalOpen ? <Overlay handleClickOutside={this.handleClickOutside}><Modal hideModal={this.hideModal}/></Overlay> : null }
      </div>
    );
  }
}

export default Home;
