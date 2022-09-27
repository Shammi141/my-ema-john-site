import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const {cart} = props;
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity; //ager quantityr sathe new added item add kore
        total = total + (product.price * product.quantity);
        shipping = shipping+ product.shipping ;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));       //10% tax    ---> string return kore tai float kore nilam
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            {/* <p>Selected items: {cart.length}</p>    jkoyta select korbe segula k copy kora array te rekhe tar length dekhbe */}
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;