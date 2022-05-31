import types from "./types";

const { LOGIN_FAILED, LOGIN_FETCH, LOGIN_SUCCESS, LOG_OUT } = types;

const initialState = {
  isError: false,
  isLoading: false,
  isAuth: false,
  username: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FETCH:
      return {
        ...state,
        isError: false,
        isLoading: true,
        isAuth: false,
        username: "",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        isAuth: true,
        username: action.data.email,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAuth: false,
        username: "",
      };

    case LOG_OUT:
      return {
        ...state,
        isError: false,
        isLoading: false,
        isAuth: false,
        username: "",
      };

    default:
      return state;
  }
};
