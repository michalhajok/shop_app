import types from './types';

const { PRODUCT_FAILED, PRODUCT_FETCH, PRODUCT_SUCCESS, PRODUCT_UPDATE } = types;

const initialState = {
    product: {
        title: '',
        picture: [],
        brand: '',
        price: '',
        description: '',
        size: [
            {
                size: '',
                quantity: 0,
            },
        ],
    },
    isLoading: false,
    isError: false,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_FETCH:
            return {
                ...state,
                product: {},
                isLoading: true,
                isError: false,
            };

        case PRODUCT_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        case PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                product: action.payload,
            };

        case PRODUCT_UPDATE:
            return {
                ...state,
                isLoading: false,
                isError: false,
                product: action.update,
            };

        default:
            return state;
    }
};

export default productReducer;
