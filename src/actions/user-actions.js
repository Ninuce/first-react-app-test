import axios from "axios";
import { API, LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_ERROR } from "../constants/constants.js";
import sha256 from "sha256"

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      isLogged: true
    }
  }
}


const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      isRegistered: true
    }
  }
}

const registerError = () => {
  return {
    type: REGISTER_ERROR,
    payload: {
      isRegistered: false
    }
  }
}

const loginError = () => {
  return {
    type: LOGIN_ERROR,
    payload: {
      isLogged: false
    }
  }
}

export const login = (email, password) => {
  return dispatch => {
    return axios
    .post(`${API.BASE}${API.LOGIN}`, {
      email,
      hashedPassword: sha256(password)
    })
    .then(res => {
      const token = res.data.payload.token // const { token } = res.data.payload
      console.log(token);
      localStorage.setItem("jwtToken", token)
      dispatch(loginSuccess())
    })
    .catch((err) => dispatch(loginError()))
  }
}





export const register = (email, username, password) => {
  return dispatch => {
    return axios
    .post(`${API.BASE}${API.REGISTER}`, {
      email,
      username,
      hashedPassword: sha256(password)
    })
    .then(res => {
      // const token = res.data.payload.token // const { token } = res.data.payload
      console.log(res);
      // localStorage.setItem("jwtToken", token)
      dispatch(registerSuccess())
    })
    .catch((err) => dispatch(registerError()))
  }
}



export const validateToken = () => {
  return dispatch => {
    const token = localStorage.getItem("jwtToken");
    // !token ? dispatch(loginSuccess()) : dispatch(loginError())
    if(token) {
      dispatch(loginSuccess())
    } else {
      dispatch(loginError())
    }
  }
}
