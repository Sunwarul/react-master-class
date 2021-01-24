import React from 'react';
import './collection-item.styles.scss';
import { CustomButton } from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItemToCartPropFunc }) => {
    const { id, name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image">
                <img src={imageUrl} alt={`with-id-${id}`} />
            </div>
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <CustomButton inverted onClick={() => addItemToCartPropFunc(item)}>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCartPropFunc: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);