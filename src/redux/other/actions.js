import types from './types'

const {
    FETCH_LOADING,
    FETCH_DELIVERY,
    FETCH_PAYMENTS
} = types

const fetchLoading = () => ({type: FETCH_LOADING})
const fetchDelivery = data => ({type: FETCH_DELIVERY, payload: data})
const fetchPayments = data => ({type: FETCH_PAYMENTS, payload: data})

const searchDelivery = () => {
    return async dispatch => {
        dispatch(fetchLoading())
        const res = await fetch('https://shopappbackend.herokuapp.com/delivery')
        const data = await res.json()
        dispatch(fetchDelivery(data))
    }
}

const searchPayments = () => {
    return async dispatch => {
        dispatch(fetchLoading())
        const res = await fetch('https://shopappbackend.herokuapp.com/payments')
        const data = await res.json()
        dispatch(fetchPayments(data))
    }
}

export default {
    searchDelivery,
    searchPayments
}
