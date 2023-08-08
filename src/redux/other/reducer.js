import types from './types';

const { FETCH_LOADING, FETCH_DELIVERY, FETCH_PAYMENTS } = types;

const initialState = {
    isLoading: false,
    delivery: [],
    payments: [],
    discountCodes: [
        { code: 'code40', discount: 0.4 },
        { code: 'code30', discount: 0.3 },
    ],
};

const otherReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case FETCH_DELIVERY:
            return {
                ...state,
                isLoading: false,
                delivery: payload,
            };
        case FETCH_PAYMENTS:
            return {
                ...state,
                isLoading: false,
                payments: payload,
            };

        default:
            return state;
    }
};

export default otherReducer;
