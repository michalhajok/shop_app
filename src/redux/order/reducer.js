import types from './types';

const { CREATE_ORDER, FETCH_ORDER_LOADING, FETCH_ORDER_SUCCESS, FETCH_ORDER_FAILED } = types;

const initialState = {
    items: [],
    user: {},
    address: {},
    price: {},
    orders: [],
    isLoading: false,
    isError: false,
};

const orderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_ORDER:
            return {
                ...state,
                items: payload.items,
                price: payload.price,
            };

        case FETCH_ORDER_LOADING:
            return {
                ...state,
                orders: [],
                isLoading: true,
                isError: false,
            };
        case FETCH_ORDER_SUCCESS:
            return {
                ...state,
                orders: payload,
                isLoading: false,
                isError: false,
            };
        case FETCH_ORDER_FAILED:
            return {
                ...state,
                orders: [],
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }
};

export default orderReducer;
