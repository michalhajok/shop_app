import types from "./types";
const { BRANDS_FAILED, BRANDS_FETCH, BRANDS_SUCCESS } = types;

const initialState = {
  isLoading: false,
  isError: false,
  brands: [],
};

export const brandReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BRANDS_FETCH:
      return { ...state, isLoading: true, isError: false, brands: [] };
    case BRANDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        brands: payload,
      };

    case BRANDS_FAILED:
      return { ...state, isLoading: false, isError: true, brands: [] };

    default:
      return state;
  }
};
