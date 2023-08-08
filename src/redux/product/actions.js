import api from '../../utils/api';

import types from './types';

const { PRODUCT_FAILED, PRODUCT_FETCH, PRODUCT_SUCCESS } = types;

const productFailed = () => ({ type: PRODUCT_FAILED });
const productFetch = () => ({ type: PRODUCT_FETCH });
const productSuccess = (data) => ({ type: PRODUCT_SUCCESS, payload: data });

const ProductFetch = (_id) => async (dispatch) => {
    dispatch(productFetch());
    const res = await api.get(`products/product/${_id}`);
    const data = await res.json();

    if (res.ok) {
        dispatch(productSuccess(data));
    } else {
        dispatch(productFailed());
    }
};

const productUpdate = (_id, _data) => async (dispatch) => {
    dispatch(productFetch());

    const res = await api.patch(`products/product/${_id}`, _data);
    const data = await res.json();

    if (res.ok) {
        dispatch(productSuccess(data));
    } else {
        dispatch(productFailed());
    }
};

export default {
    ProductFetch,
    productUpdate,
};
