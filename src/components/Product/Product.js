import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {        //product er info vitore pathate/show props --> props k destructuring kore direct diye disi
    //console.log(props.product);     //consoled all data

//destructuring all data for showing in ui
    // const {product, handleAddToCart} = props;
    const {name, img, seller, price, ratings} =product;
    // console.log(props); 

    return (
        <div className='product'>
            {/* <h2>This is product section</h2> */}
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;