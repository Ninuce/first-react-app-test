import { connect } from "react-redux";
import Posts from "../../components/Posts"
import { getPosts } from "../../actions/post-actions.js"

export default connect(
  state => ({ postsReducer: state.postsReducer}),
  { getPosts }
)(Posts)
