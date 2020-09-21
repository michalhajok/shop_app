import types from "./types";
const { PRODUCT_FAILED, PRODUCT_FETCH, PRODUCT_SUCCESS } = types;

const productFailed = () => ({type: PRODUCT_FAILED})
const productFetch = () => ({type: PRODUCT_FETCH})
const productSuccess = data => ({type: PRODUCT_SUCCESS, payload: data})

const ProductFetch = (_id) => {
    return (dispatch) => {
        dispatch(productFetch())
        fetch(`http://192.168.0.11:4000/products/product/${_id}`)
        .then(res => res.json())
        .then(data => dispatch(productSuccess(data)))
        .catch(err => dispatch(productFailed()))
    }
}

export default {
    ProductFetch
}
