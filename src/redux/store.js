import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { productsReducer } from "./products/reducer";
import { productReducer } from "./product/reducer";
import { basketReducer } from "./basket/reducer";
import { authReducer } from "./auth/reducer";
import { brandReducer } from "./brands/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  basket: basketReducer,
  auth: authReducer,
  brands: brandReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
