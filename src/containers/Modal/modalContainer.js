import { connect } from "react-redux";
import Modal from "../../components/Modal/Modal.js"
import { submitPost, getPosts } from "../../actions/post-actions.js"

export default connect(
  state => ({ postsReducer: state.postsReducer}),
  { submitPost, getPosts }
)(Modal)
