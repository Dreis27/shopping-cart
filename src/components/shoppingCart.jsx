import React, { useRef, useEffect } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/shoppingCart.css';

const ShoppingCart = ({isVisible, onToggle, cartItems, removeItem}) => {

    const cartRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click is outside the cart
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                onToggle();
            }
        };

        if (isVisible) {
            document.addEventListener('click', handleClickOutside);
        }

        // Cleanup funct
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isVisible]);

    // Calculate the total price for all items.
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div ref={cartRef} className={`shopping-cart ${isVisible ? 'show-cart' : ''}`}>
            <div className='cart-header'>
                <h2>Your Cart</h2>
                <button className='close-btn' onClick={onToggle}>
                    <FontAwesomeIcon className="icon" icon={faXmark} style={{color: "#ffffff"}} />
                </button>
            </div>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>Price: ${item.price}</span>
                        <span>Quantity: {item.quantity}</span>
                        <button onClick={() => console.log(`Remove item ${item.id}`)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div className="total-price">
                <strong>Total: ${totalPrice}</strong>
            </div>
            <button onClick={() => console.log("Proceed to checkout")}>Proceed to Checkout</button>
        </div>
    )
}

export default ShoppingCart;
