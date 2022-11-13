import types from "./types";

const { LOGIN_FAILED, LOGIN_FETCH, LOGIN_SUCCESS, LOG_OUT } = types;

const loginRequest = () => ({ type: LOGIN_FETCH });
const loginFailed = () => ({ type: LOGIN_FAILED });
const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, data });
const logout = () => ({ type: LOG_OUT });

const login =  (user, navigate) => {
    return async  (dispatch) => {
        dispatch(loginRequest());
        const res = await fetch("https://shopbackend-michalhajok.vercel.app/user/login", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(user),
        })
        const data = await res.json()
                if (res.ok) {
                    console.log(data);
                dispatch(loginSuccess(data));
                navigate("/shop_app");
                } else {
                dispatch(loginFailed());
                }
        };
};

export default {
  login,
  logout,
};
