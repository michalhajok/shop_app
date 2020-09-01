import { createStore, combineReducers } from 'redux'

import { productReducer } from './products/reducer'
import { basketReducer } from './basket/reducer'

const rootReducer = combineReducers({
    products: productReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer)
