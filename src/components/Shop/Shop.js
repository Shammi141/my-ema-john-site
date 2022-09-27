import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

//for loading data from api
    const [products, setProducts] = useState([]);

//for adding cart in user order summary
    const [cart, setCart]= useState([]);

    useEffect(() =>{
        // console.log('products loaded before fetch')
        fetch('products.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => {
            setProducts(data);
            // console.log('products loaded');
        })

    }, []);


//localStorage theke load kore kisu thakle show korbe nathakle empty dekhabe
    useEffect(() => {
        //  console.log('localstorages first line', products);
        const  storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart = [];
        for(const id in storedCart){
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);       //returns first element
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        // console.log('local storage finished')
    }, [products]);     //jehetu running hoy asynchoronous vabe so ja age load hote pare hobe. [products] deyar cz = [] empty pele ekbar e load korbe porer products gula r pabe na..bt we want products er value change hole call korte. called dependency


//for adding clicked item in cart
    const handleAddToCart = (selectedProduct) => {
        //console.log(selectedProduct);       //checkeh that items info is getting or not
        // cart.push(product);    evabe add kokhonoi korbo na 
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        //newCart = [...cart, selectedProduct];     //ager cart e jodi kisu thakle tahole clicked product ta tar sathe add kore dibe order summary te
        setCart(newCart);
        addToDb(selectedProduct.id)     //to storing data in localStorage from fakeDb.js
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