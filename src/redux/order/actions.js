import api from '../../utils/api';

import types from './types';

const { CREATE_ORDER, FETCH_ORDER_LOADING, FETCH_ORDER_SUCCESS, FETCH_ORDER_FAILED } = types;

const addItemsToOrder = (data) => ({ type: CREATE_ORDER, payload: data });
const fetchOrders = () => ({ type: FETCH_ORDER_LOADING });
const fetchOrdersSuccess = (data) => ({ type: FETCH_ORDER_SUCCESS, payload: data });
const fetchOrdersFailed = () => ({ type: FETCH_ORDER_FAILED });

const getOrders = (user) => async (dispatch) => {
    dispatch(fetchOrders());

    const res = await api.get(`orders/${user}`);
    const data = await res.json();

    if (res.ok) {
        dispatch(fetchOrdersSuccess(data));
    } else {
        dispatch(fetchOrdersFailed());
    }
};

export default {
    addItemsToOrder,
    getOrders,
};
