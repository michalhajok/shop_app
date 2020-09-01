import types from './types'

const { ADD_TO_BASKET, DELETE_FROM_BASKET } = types

const initialState = {
    basket: []
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return 

        case DELETE_FROM_BASKET:
            return
        
        default:
            return state
    }
}