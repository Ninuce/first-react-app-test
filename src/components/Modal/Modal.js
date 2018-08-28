import React, { Component } from 'react';
import './modal.css';


class Modal extends Component {

  state = {
    imageUrl: null,
    formData: null,
    caption:"",
  };

  handleAddImg = event => {
    const file = event.target.files[0];
    const fileReader = new FileReader()
    const formData = new FormData();
    formData.append("media", file);

    fileReader.onloadend = () => {
      this.setState({formData, imgUrl: fileReader.result})
    }
    fileReader.readAsDataURL(file)
  }

  handleSubmit = e => {
    console.log("enter handlesubmit");
    e.preventDefault();
    const { formData, caption } = this.state;
    this.props.submitPost(formData, caption).then(() => {
      this.props.getPosts();
    })

  };

  componentDidUpdate() {
    if(this.props.postsReducer.isSubmitted) {
      this.props.hideModal()
    }
  }
  onChange = event => this.setState({caption: event.target.value})


  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <form>
            <label className="modal__form-input-container">Caption
              <input type="text" onChange={this.onChange}></input>
            </label>
            <label className="modal__form-input-container">
              File:
              <input type="file" onChange={this.handleAddImg}></input>
            </label>
          </form>
          {this.state.imgUrl ? (<img src={this.state.imgUrl} alt="" /> ): null}
          <div className="modal__actions">
            <button className="btn" type="button" name="button" onClick={this.handleSubmit}>Submit</button>
            <button className="btn" type="button" name="button" onClick={this.props.hideModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
