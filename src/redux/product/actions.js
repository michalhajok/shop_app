import types from "./types";
const { PRODUCT_FAILED, PRODUCT_FETCH, PRODUCT_SUCCESS } = types;

const productFailed = () => ({ type: PRODUCT_FAILED });
const productFetch = () => ({ type: PRODUCT_FETCH });
const productSuccess = (data) => ({ type: PRODUCT_SUCCESS, payload: data });

const ProductFetch = (_id) => {
  return (dispatch) => {
    dispatch(productFetch());
    fetch(`https://shopappbackend.herokuapp.com/products/product/${_id}`)
      .then((res) => res.json())
      .then((data) => dispatch(productSuccess(data)))
      .catch((err) => dispatch(productFailed()));
  };
};

const productUpdate = (_id, data) => {
  return (dispatch) => {
    dispatch(productFetch());
    fetch(`https://shopappbackend.herokuapp.com/products/update/${_id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          dispatch(productSuccess(data));
        } else {
          dispatch(productFailed());
        }
      })
      .catch((err) => dispatch(productFailed()));
  };
};

export default {
  ProductFetch,
  productUpdate,
};
