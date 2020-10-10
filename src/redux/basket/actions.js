import types from "./types";

const { ADD_TO_BASKET, DELETE_FROM_BASKET } = types;

const addToBasket = (data) => ({ type: ADD_TO_BASKET, payload: data });
const deleteFromBasket = (_id) => ({ type: DELETE_FROM_BASKET, id: _id });

export default {
  addToBasket,
  deleteFromBasket,
};
