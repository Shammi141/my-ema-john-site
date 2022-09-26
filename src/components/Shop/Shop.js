import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

//for loading data from api
    const [products, setProducts] = useState([]);

//for adding cart in user order summary
    const [cart, setCart]= useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setProducts(data))

    }, []);

//for adding clicked item in cart
    const handleAddToCart = (product) => {
        console.log(product);       //checkeh that items info is getting or not
        // cart.push(product);    evabe add kokhonoi korbo na 
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h3>For products: {products.length}</h3> */}

                {
                    products.map(product => <Product 
                        key = {product.id}      //declared unique key 
                        product = {product}     //product hishabe product er all info diye dilam
                        handleAddToCart = {handleAddToCart}
                        ></Product>)    //atleast all product dhorte parlam! now show the info

                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
                {/* goto the component's Cart.js file */}
            </div>
        </div>
    );
};

export default Shop;