import api from '../../utils/api';

import types from './types';

const { FETCH_LOADING, FETCH_DELIVERY, FETCH_PAYMENTS } = types;

const fetchLoading = () => ({ type: FETCH_LOADING });
const fetchDelivery = (data) => ({ type: FETCH_DELIVERY, payload: data });
const fetchPayments = (data) => ({ type: FETCH_PAYMENTS, payload: data });

const searchDelivery = () => async (dispatch) => {
    dispatch(fetchLoading());

    const res = await api.get(`delivery`);
    const data = await res.json();

    if (res.ok) {
        dispatch(fetchDelivery(data));
    }
};

const searchPayments = () => async (dispatch) => {
    dispatch(fetchLoading());

    const res = await api.get(`payments`);
    const data = await res.json();

    if (res.ok) {
        dispatch(fetchPayments(data));
    }
};

export default {
    searchDelivery,
    searchPayments,
};
