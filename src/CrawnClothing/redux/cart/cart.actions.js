import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItemFromCartAction = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const decreaseProductCountAction = item => ({
    type: CartActionTypes.DECREASE_PRODUCT_COUNT,
    payload: item
})