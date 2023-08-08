import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products/reducer';
import productReducer from './product/reducer';
import basketReducer from './basket/reducer';
import authReducer from './auth/reducer';
import brandReducer from './brands/reducer';
import otherReducer from './other/reducer';
import orderReducer from './order/reducer';

const store = configureStore(
    {
        reducer: {
            products: productsReducer,
            product: productReducer,
            basket: basketReducer,
            auth: authReducer,
            brands: brandReducer,
            other: otherReducer,
            order: orderReducer
        }
    },
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
