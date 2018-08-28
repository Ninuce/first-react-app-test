import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './index.css';
import rootReducer from "./reducers/reducers.js"
import Home from './containers/Home/homeContainer.js';
import Login from './containers/Login/loginContainer.js';
import Register from './containers/Register/registerContainer.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,  {}, applyMiddleware(reduxThunk))

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
