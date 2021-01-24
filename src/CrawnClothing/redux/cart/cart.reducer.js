import { CartActionTypes } from './cart.types';
import { addToCart, removeItemFromCart, decreaseProductCount, increaseProductCountUtil } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addToCart(state.cartItems, action.payload)
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        case CartActionTypes.DECREASE_PRODUCT_COUNT:
            return {
                ...state,
                cartItems: decreaseProductCount(state.cartItems, action.payload)
            }

        case CartActionTypes.INCREASE_PRODUCT_COUNT:
            return {
                ...state,
                cartItems: increaseProductCountUtil(state.cartItems, action.payload)
            }

        default:
            return state
    }
}