import types from "./types";

const { LOGIN_FAILED, LOGIN_FETCH, LOGIN_SUCCESS, LOG_OUT } = types;

const loginRequest = () => ({ type: LOGIN_FETCH });
const loginFailed = () => ({ type: LOGIN_FAILED });
const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, data });
const logout = () => ({ type: LOG_OUT });

const login = (dispatch) => {
  dispatch(loginRequest);
  return function () {
    fetch("http://localhost:4000/auth/login")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailed);
        }
      })
      .catch((err) => dispatch(loginFailed()));
  };
};

export default {
  login,
  logout,
};
