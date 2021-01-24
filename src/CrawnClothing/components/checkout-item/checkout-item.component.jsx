import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import {
    decreaseProductCountAction,
    removeItemFromCartAction,
    increaseProductCountAction
} from '../../redux/cart/cart.actions';


const CheckoutItem = ({ cartItem, removeItemAction, increaseProductQuantity,
    decreaseProductQuantity }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={() => decreaseProductQuantity(cartItem)}> &#10094; </span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => increaseProductQuantity(cartItem)}> &#10095; </span>
            </span>
            <span className="price">{price}</span>
            <div
                className="remove-button"
                onClick={() => removeItemAction(cartItem)}>
                &#10005;
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItemAction: (cartItem) => dispatch(removeItemFromCartAction(cartItem)),
    increaseProductQuantity: item => dispatch(increaseProductCountAction(item)),
    decreaseProductQuantity: item => dispatch(decreaseProductCountAction(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);