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
    // We'll just clear the shopping cart
    setCart([]);
    alert('Thank you for your purchase!');
  };

  return (
    <div className="shop-container">
      <div className="purple-line"></div>
      <p className="home-description">
        <h2 className="green-text body-text">Welcome to a World of Conscious Choices</h2>
        <p className="body-text">
        <p>Embark on a journey of mindful living with every purchase from our unique collection. Beyond acquiring products, you're embracing a purpose a commitment to environmental sustainability that goes beyond the ordinary.</p>

        <p>Discover an array of thoughtfully curated, eco-friendly products designed to make a positive impact. Our selection isn't just about what you buy; it's a conscious decision to minimize ecological footprints, encourage responsible consumption, and foster sustainable living practices.</p>

        <p>With each item, you play a vital role in supporting initiatives dedicated to environmental conservation, recycling awareness, and the pursuit of a greener future. Your choice echoes through our collective effort to build a community devoted to positive environmental change.</p>

        <p>We believe in the power of individual choices, and by investing in our products, you become a part of a movement. Together, we're creating a harmonious balance between consumerism and environmental responsibility, illustrating that even small actions like choosing sustainable products contribute significantly to preserving the beauty and vitality of our planet for generations to come.</p>

        <h1 className="green-text body-text" style={{ fontSize: '24px' }}>
          Join us in this journey towards a healthier, more sustainable planet. Your conscious choices Together, we can make a difference.
        </h1>
        </p>
      </p>
      <div className="purple-line"></div>
      <h1 className="green-text body-text">Please Help Support By Purchasing The Items Below</h1>
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
