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
        const res = await fetch('https://shopbackend-michalhajok.vercel.app/delivery', {
            method: 'GET',
            cors: 'cors'
        })
        const data = await res.json()
        dispatch(fetchDelivery(data))
    }
}

const searchPayments = () => {
    return async dispatch => {
        dispatch(fetchLoading())
        const res = await fetch('https://shopbackend-michalhajok.vercel.app/payments', {
            method: 'GET',
            cors: 'cors'
        })
        const data = await res.json()
        dispatch(fetchPayments(data))
    }
}

export default {
    searchDelivery,
    searchPayments
}
