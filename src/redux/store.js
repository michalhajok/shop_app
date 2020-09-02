import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { productReducer } from "./products/reducer";
import { basketReducer } from "./basket/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  products: productReducer,
  basket: basketReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
