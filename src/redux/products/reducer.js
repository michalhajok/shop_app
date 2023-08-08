import types from './types';

const { ADD_PRODUCT, FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } = types;

const initialState = {
    products: [],
    isLoading: false,
    isError: false
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.item],
                isLoading: false,
                isError: false
            };

        case FETCH_PRODUCTS:
            return {
                ...state,
                products: [],
                isLoading: true,
                isError: false
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                isError: false
            };

        case FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                products: [],
                isLoading: false,
                isError: true
            };

        default:
            return state;
    }
};

export default productsReducer;
