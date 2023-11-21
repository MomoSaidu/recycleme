import React, { useState } from 'react';
import tshirtImage from '../images/tshirt.png';
import jacketImage from '../images/jacket.png';
import bottleImage from '../images/bottle.png';
import keyChainImage from '../images/keyChain.png';
import posterImage from '../images/poster.png';

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [items] = useState([
    { id: 1, name: 'T-shirt', price: 20, image: tshirtImage },
    { id: 2, name: 'Jacket', price: 50, image: jacketImage },
    { id: 3, name: 'Water Bottle', price: 10, image: bottleImage },
    { id: 4, name: 'Key Chain', price: 5, image: keyChainImage },
    { id: 5, name: 'Poster', price: 15, image: posterImage },
  ]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const checkout = () => {
    // Perform checkout logic, e.g., send order to a server
    // For this example, we'll just clear the shopping cart
    setCart([]);
    alert('Thank you for your purchase!');
  };

  return (
    <div className="shop-container">
      <p className="green-text body-text">
        When you choose to purchase items from our collection, you are not just acquiring products; you are actively contributing to a meaningful mission dedicated to environmental sustainability. With a commitment to the planet's well-being, our selection of eco-friendly products is curated to minimize ecological impact, promote responsible consumption, and inspire sustainable living practices. Your purchase directly supports initiatives aimed at environmental conservation, recycling awareness, and fostering a greener future. By investing in our products, you join us in building a community dedicated to positive environmental change, empowering individuals to make conscious choices that collectively contribute to a healthier, more sustainable planet. Together, we strive to create a harmonious balance between consumerism and environmental responsibility, demonstrating that every small action, like choosing sustainable products, plays a crucial role in preserving the beauty and vitality of our planet for generations to come.
      </p>
      <h1>Please Help Support By Puchasing The Items Below</h1>
      <div>
        <h2 className="green-text body-text">Items for Sale:</h2>
        <ul className="item-list">
          {items.map((item) => (
            <li key={item.id} className="item">
              <img
                src={item.image}
                alt={item.name}
                className="item-image"
              />
              <span className="item-details">
                {item.name} -  €{item.price}
              </span>
              <button className="add-to-cart" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="green-text body-text">Shopping Cart:</h2>
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <span className="cart-item-details">
                {item.name} -  €{item.price} (Quantity: {item.quantity})
              </span>
              <button className="remove-from-cart" onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
        <p className="total body-text">Total:  €{calculateTotal()}</p>
        <button className="checkout" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Shop;
