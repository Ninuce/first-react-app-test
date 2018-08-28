import { connect } from "react-redux";
import Register from "../../components/Register/Register.js"
import { register } from "../../actions/user-actions.js"

export default connect(
  state => ({ registerReducer: state.registerReducer}),
  { register }
)(Register)
