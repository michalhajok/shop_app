import types from "./types";

const { LOGIN_FAILED, LOGIN_FETCH, LOGIN_SUCCESS, LOG_OUT } = types;

const loginRequest = () => ({ type: LOGIN_FETCH });
const loginFailed = () => ({ type: LOGIN_FAILED });
const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, data });
const logout = () => ({ type: LOG_OUT });

const login = (data, red) => {
  return function (dispatch) {
    dispatch(loginRequest());
    fetch("https://shopappbackend.herokuapp.com/user/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          dispatch(loginSuccess(data));
          red.push("/shop_app");
        } else {
          dispatch(loginFailed());
        }
      })
      .catch((err) => dispatch(loginFailed()));
  };
};

export default {
  login,
  logout,
};
