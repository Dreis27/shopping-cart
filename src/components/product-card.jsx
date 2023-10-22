import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../styles/product-card.css'

const ProductCard = ({ productId, productImage, productTitle, productPrice, addToCart, removeFromCart, cartItems}) => {
    const [numberOfItems, setNumberOfItems] = useState(0);

    useEffect(() => {
        const itemInCart = cartItems.find(item => item.id === productId);
        setNumberOfItems(itemInCart ? itemInCart.quantity : 0);
    }, [cartItems, productId]);

    const handleAddToCart = () => {
        addToCart({
          id: productId,
          name: productTitle,
          price: productPrice,
          quantity: numberOfItems
        });
        setNumberOfItems(prevNumber => prevNumber + 1);
      }

    const handleMinus = () => {
        removeFromCart(productId);
        setNumberOfItems(prevNumber => prevNumber > 0 ? prevNumber - 1 : 0);
    }

    return (
        <div key={productId} className='product-card'>
            <div className='product-card-image-container'>
                <img src={productImage} alt={productTitle} />
                <div className='product-card-details'>
                    <p>{productTitle}</p>
                    <p>{productPrice} $</p>
                </div>
            </div>
            <div className='add-to-cart-container'>
            {
                    (numberOfItems !== 0) ? 
                    <div> 
                        <button className='minus-to-cart'onClick={handleMinus}>-</button>
                        <div>{numberOfItems}</div>
                        <button className='plus-to-cart' onClick={handleAddToCart}>+</button> 
                    </div>
                    :
                    <div>
                        <button className='add-to-cart-button' onClick={handleAddToCart}><FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff"}} /> ADD TO CART</button>
                    </div>
                    
                }
            </div>
        </div>
    )
}

export default ProductCard;