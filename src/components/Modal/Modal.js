import React, { Component } from 'react';
import './modal.css';


class Modal extends Component {

  state = {
    imgUrl: null
  }

  handleAddImg = event => {
    const file = event.target.files[0];
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      this.setState({imgUrl: fileReader.result})
    }
    fileReader.readAsDataURL(file)
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <form>
            <label className="modal__form-input-container">Caption
              <input type="text"></input>
            </label>
            <label className="modal__form-input-container">
              File:
              <input type="file" onChange={this.handleAddImg}></input>
            </label>
          </form>
          {this.state.imgUrl ? (<img src={this.state.imgUrl} alt="" /> ): null}
          <div className="modal__actions">
            <button className="btn" type="button" name="button">Yes</button>
            <button className="btn" type="button" name="button" onClick={this.props.hideModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
