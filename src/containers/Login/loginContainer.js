import { connect } from "react-redux";
import Login from "../../components/Login/Login.js"
import { login } from "../../actions/user-actions.js"

export default connect(
  state => ({ loginReducer: state.loginReducer}),
  { login }
)(Login)
