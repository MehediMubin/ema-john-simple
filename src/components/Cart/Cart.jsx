import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
    let totalPrice = 0,
        totalShipping = 0,
        quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping * quantity;
        quantity += product.quantity;
    }

    let tax = (totalPrice * 7) / 100;
    let grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;
