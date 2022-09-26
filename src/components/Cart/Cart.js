import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected items: {cart.length}</p>    {/* jkoyta select korbe segula k copy kora array te rekhe tar length dekhbe */}
        </div>
    );
};

export default Cart;