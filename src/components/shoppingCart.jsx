
const ShoppingCart = () => {

    const items = [
        { id: 1, name: "Item 1", price: 10, quantity: 2 },
        { id: 2, name: "Item 2", price: 20, quantity: 1 }
    ];

    // Calculate the total price for all items.
    const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="shopping-cart">
            <h2>Your Cart</h2>
            <ul>
                {items.map(item => (
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
