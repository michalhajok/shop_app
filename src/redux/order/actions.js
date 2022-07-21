import types from './types'

const { 
    CREATE_ORDER,
    FETCH_ORDER_LOADING,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_FAILED  
} = types

const addItemsToOrder = data => ({type: CREATE_ORDER, payload: data})
const fetchOrders = () => ({type: FETCH_ORDER_LOADING})
const fetchOrdersSuccess = data => ({type: FETCH_ORDER_SUCCESS, payload: data})
const fetchOrdersFailed = () => ({type: FETCH_ORDER_FAILED})

const getOrders = (user) => {
    return async dispatch => {
        dispatch(fetchOrders())
        try {
            const res = await fetch(`https://shopappbackend.herokuapp.com/orders/${user}`)
            const data = await res.json()
            dispatch(fetchOrdersSuccess(data))
        } catch (error) {
            dispatch(fetchOrdersFailed())
        }
        
    }
}

export default {
    addItemsToOrder,
    getOrders
}
