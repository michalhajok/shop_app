import types from "./types";

const { 
    ADD_TO_BASKET, 
    DELETE_FROM_BASKET, 
    CHANGE_QUANTITY_PLUS,
    CHANGE_QUANTITY_MINUS  
} = types;

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

        case CHANGE_QUANTITY_MINUS:
            let indexMinus = state.basket.findIndex(({ _id }) => _id === payload._id)
            let newBasketMinus = state.basket;
            if (newBasketMinus[indexMinus].quantity > 1)
                newBasketMinus[indexMinus].quantity -= 1;
            
            return { basket: newBasketMinus };
            
        case CHANGE_QUANTITY_PLUS:
            let indexPlus = state.basket.findIndex(({ _id }) => _id === payload._id)
            let newBasketPlus = state.basket;
            
            if (newBasketPlus[indexPlus].quantity < newBasketPlus[indexPlus].maxQuantity)
                newBasketPlus[indexPlus].quantity += 1;
                
            return { basket: newBasketPlus };
            
        default:
            return state;
    }
};
