import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const ProductCard = ({ productId, productImage, productTitle, productPrice}) => {
    const [wantsToAddToCart, setWantsToAddToCart] = useState(false);
    const [numberOfItems, setNumberOfItems] = useState(0);

    return (
        <div key={productId} className='product-card'>
            <div className='product-card-image-container'>
                <img src={productImage} alt={productTitle} width="100" />
                <div className='product-card-details'>
                    <p>{productTitle}</p>
                    <p>{productPrice}</p>
                </div>
            </div>
            <div className='add-to-cart-container'>
            {
                    wantsToAddToCart ? 
                    <div> 
                        <button onClick={() => setNumberOfItems(prevNumber => prevNumber > 0 ? prevNumber - 1 : 0)}>-</button>
                        <div>{numberOfItems}</div>
                        <button onClick={() => setNumberOfItems(prevNumber => prevNumber + 1)}>+</button> 
                    </div>
                    :
                    <div>
                        <button onClick={() => setWantsToAddToCart(true)}><FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff"}} />ADD TO CART</button>
                    </div>
                    
                }
            </div>
        </div>
    )
}

export default ProductCard;