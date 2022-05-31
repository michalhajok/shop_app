import types from "./types";

const { ADD_TO_BASKET, DELETE_FROM_BASKET } = types;

const initialState = {
  basket: [],
};

export const basketReducer = (state = initialState, { type, payload, id }) => {
  switch (type) {
    case ADD_TO_BASKET:
      const index = state.basket.findIndex(({ _id }) => _id === payload._id);
      if (state.basket.length === 0) {
        return {
          ...state,
          basket: [...state.basket, payload],
        };
      } else {
        if (index === -1) {
          return {
            ...state,
            basket: [...state.basket, payload],
          };
        } else {
          let newBasket = state.basket;
          if (newBasket[index].quantity < newBasket[index].maxQuantity)
            newBasket[index].quantity += 1;

          return { ...state, basket: newBasket };
        }
      }
    case DELETE_FROM_BASKET:
      let newBasket = state.basket.filter(({ _id }) => _id !== id);

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};
