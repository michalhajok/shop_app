import api from '../../utils/api';

import types from './types';

const { BRANDS_FAILED, BRANDS_FETCH, BRANDS_SUCCESS } = types;

const brandsFetch = () => ({ type: BRANDS_FETCH });
const brandsFailed = () => ({ type: BRANDS_FAILED });
const brandsSuccess = (data) => ({
    type: BRANDS_SUCCESS,
    payload: data,
});

const fetchData = () => async (dispatch) => {
    dispatch(brandsFetch());

    const res = await api.get(`categories`);
    const data = await res.json();

    if (res.ok) {
        dispatch(brandsSuccess(data));
    } else {
        dispatch(brandsFailed());
    }
};

const addBrand = (_data) => async (dispatch) => {
    dispatch(brandsFetch());

    const res = await api.post(`categories/add`, _data);
    const data = await res.json();

    if (res.ok) {
        dispatch(brandsSuccess(data));
    } else {
        dispatch(brandsFailed());
    }
};

export default {
    fetchData,
    addBrand,
};
