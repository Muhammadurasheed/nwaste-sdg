import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import './Checkout-item.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) =>{
    const { title, imageURL, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
           <div className='image-container'>
             <img src={imageURL} alt='product' />
           </div>
           <span className='title'>{title}</span>
           <span className='quantity'>
           <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
           <span className='value'>{quantity}</span>
           <div className='arrow' onClick={() => addItem(cartItem)} >&#10095;</div>
           </span>
           <span className='price'>{price}</span>
           <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
 clearItem:item => dispatch(clearItemFromCart(item)),
 addItem: item => dispatch(addItem(item)),
 removeItem: item => dispatch(removeItem(item)) 
})

export default connect(null, mapDispatchToProps)(CheckoutItem);