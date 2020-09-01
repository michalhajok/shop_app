import types from './types'

const { ADD_PRODUCT, FETCH_PRODUCTS, DELETE_PRODUCT } = types

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return{
                ...state,
                products: [ ...state.products, action.item ]
            }
        
        case FETCH_PRODUCTS: 
            return
        
        case DELETE_PRODUCT:
            return

        default:
            return state
    }
}