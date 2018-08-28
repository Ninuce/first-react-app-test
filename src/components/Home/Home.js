import React, { Component } from 'react';
import Posts from "../../containers/Posts/postsContainer";
import UserList from "../UserList";
import Header from "../Header/Header.js";
import Modal from "../../containers/Modal/modalContainer.js";
import Overlay from "../Overlay/Overlay.js";
import './home.css';

class Home extends Component {

  constructor (props) {
    super(props);
    this.state = {
        isModalOpen: false
      }
      props.validateToken();
  }

  componentDidUpdate() {
    const { loginReducer } = this.props; //OR loginReducer = this.props.loginReducer - in props, find loginReducer key, store value in const loginReducer
    if(!loginReducer.isLogged) {
      this.props.history.push("/login")
    }
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
    )
  }
}

export default Home;
