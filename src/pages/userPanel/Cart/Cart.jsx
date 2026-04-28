import React from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import './Cart.css'; // CSS file import karna na bhulna

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart,
    } = useCart();

    if (isEmpty) return (
        <div className="empty-cart-container">
            <h2> 🛍️</h2>
            <p></p>
            <Link to="/products" className="shop-link"> Shopping</Link>
        </div>
    );

    return (
        <div className="cart-page-wrapper">
            <div className="cart-container">
                <h2 className="cart-title">Shopping Cart ({totalUniqueItems} Items)</h2>
                
                <div className="cart-table-container">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="cart-product-info">
                                            <img src={item.imageUrl} alt={item.name} className="cart-img" />
                                            <span className="product-name">{item.name}</span>
                                        </div>
                                    </td>
                                    <td>₹{item.price}</td>
                                    <td>
                                        <div className="qty-controls">
                                            <button className="qty-btn" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span className="qty-number">{item.quantity}</span>
                                            <button className="qty-btn" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                    </td>
                                    <td>₹{item.itemTotal}</td>
                                    <td>
                                        <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="cart-footer">
                    <button className="clear-cart-btn" onClick={() => emptyCart()}>Clear Cart</button>
                    <div className="cart-summary-box">
                        <h3>Grand Total: <span>₹{cartTotal}</span></h3>
                      <Link to={'/checkout'}>  <button className="checkout-btn">Proceed to Checkout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;