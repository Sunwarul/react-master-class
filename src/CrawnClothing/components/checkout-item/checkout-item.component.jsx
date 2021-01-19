import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItemFromCart, addItemToCart } from '../../redux/cart/cart.actions';


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
                <div
                    className="arrow"
                    onClick={() => decreaseProductQuantity(cartItem)}
                >
                    &#10094;
            </div>
                <span className="value">{quantity}</span>
                <div
                    className="arrow"
                    onClick={() => increaseProductQuantity(cartItem)}

                >
                    &#10095;
        </div>
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
    removeItemAction: (cartItem) => dispatch(removeItemFromCart(cartItem)),
    increaseProductQuantity: item => dispatch(addItemToCart(item)),
    decreaseProductQuantity: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);