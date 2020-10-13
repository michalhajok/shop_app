import types from "./types";

const {
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  DELETE_PRODUCT,
} = types;

const addProduct = (item) => ({ type: ADD_PRODUCT, item });
const fetchRequest = () => ({ type: FETCH_PRODUCTS });
const fetchProductsFailed = () => ({ type: FETCH_PRODUCTS_FAILED });
const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});
const deleteProduct = () => ({ type: DELETE_PRODUCT });

const fetchProducts = (category) => {
  return function (dispatch) {
    dispatch(fetchRequest());
    fetch(`https://shopappbackend.herokuapp.com/products/${category}`)
      .then((res) => res.json())
      .then((data) => dispatch(fetchProductsSuccess(data)))
      .catch((err) => {
        dispatch(fetchProductsFailed());
      });
  };
};

export default {
  addProduct,
  fetchProducts,
  deleteProduct,
};
