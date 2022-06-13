import types from "./types";

const { 
    ADD_TO_BASKET, 
    DELETE_FROM_BASKET, 
    CHANGE_QUANTITY_PLUS,
    CHANGE_QUANTITY_MINUS  
} = types;

const addToBasket = (data) => ({ type: ADD_TO_BASKET, payload: data });
const deleteFromBasket = (_id) => ({ type: DELETE_FROM_BASKET, id: _id });
const changePlusQuantity = (data) => ({ type: CHANGE_QUANTITY_PLUS, payload: data });
const changeMinusQuantity = (data) => ({ type: CHANGE_QUANTITY_MINUS, payload: data });

export default {
    addToBasket,
    deleteFromBasket,
    changePlusQuantity,
    changeMinusQuantity
};
