import types from './types';

const { LOGIN_FAILED, LOGIN_FETCH, LOGIN_SUCCESS, LOG_OUT } = types;

const initialState = {
    isError: false,
    isLoading: false,
    isAuth: false,
    user: {},
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FETCH:
            return {
                ...state,
                isError: false,
                isLoading: true,
                isAuth: false,
                user: {},
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isError: false,
                isLoading: false,
                isAuth: true,
                user: action.data,
            };

        case LOGIN_FAILED:
            return {
                ...state,
                isError: true,
                isLoading: false,
                isAuth: false,
                user: {},
            };

        case LOG_OUT:
            return {
                ...state,
                isError: false,
                isLoading: false,
                isAuth: false,
                user: {},
            };

        default:
            return state;
    }
};

export default authReducer;
