import { connect } from "react-redux";
import Home from "../../components/Home/Home.js"
import { validateToken } from "../../actions/user-actions.js"

export default connect(
  state => ({ loginReducer: state.loginReducer}),
  { validateToken }
)(Home)
