import React from 'react';
import './cart-dropdown.styles.scss';
import { CustomButton } from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown-wrapper'>
            {
                cartItems.length ?
                    <>
                        <span className='title'>Products Added Into Cart</span>
                        <div className='cart-items'>
                            {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
                        </div>
                        <CustomButton myClass="checkout-button"
                            onClick={() => {
                                dispatch(toggleCartHidden());
                                history.push('/checkout');
                            }}>GO TO CHECKOUT</CustomButton>
                    </>
                    :
                    <div>
                        <h5 style={{ textAlign: 'center' }}>Empty cart!</h5>
                    </div>
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

// const mapDispatchToProps = dispatch => ({
//     hideTheDropDown: () => dispatch(toggleCartHidden())
// })

export default withRouter(connect(mapStateToProps)(CartDropdown));