import types from './types'

const { ADD_PRODUCT, FETCH_PRODUCTS, DELETE_PRODUCT } = types

const addProduct = item => ({type: ADD_PRODUCT, item})
const fetchProducts = item => ({type: FETCH_PRODUCTS, item})
const deleteProduct = () => ({type: DELETE_PRODUCT})

export default {
    addProduct,
    fetchProducts,
    deleteProduct
}
