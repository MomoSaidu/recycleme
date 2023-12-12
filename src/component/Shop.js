import React, { useState } from 'react';
import axios from 'axios';
import tshirtImage from '../images/tshirt.png';
import jacketImage from '../images/jacket.png';
import bottleImage from '../images/bottle.png';
import keyChainImage from '../images/keyChain.png';
import posterImage from '../images/poster.png';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';



const Shop = () => {
  // State for shopping cart and checkout modal
  const [cart, setCart] = useState([]);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  // Array of items for sale
  const [items] = useState([
    { id: 1, name: 'T-shirt', price: 20, image: tshirtImage },
    { id: 2, name: 'Jacket', price: 50, image: jacketImage },
    { id: 3, name: 'Water Bottle', price: 10, image: bottleImage },
    { id: 4, name: 'Key Chain', price: 5, image: keyChainImage },
    { id: 5, name: 'Poster', price: 15, image: posterImage },
  ]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Function to handle the payment token received from Stripe
  const handleToken = async (token, addresses) => {
    const res = await axios.post('https://your-server/checkout', {
      token,
      cart,
    });
    const { status } = res.data;
    if (status === 'success') {
      toast('Success! Check emails for details', {
        type: 'success',
      });
    } else {
      toast('Something went wrong', {
        type: 'failure',
      });
    }
  };

  // Function to open the checkout modal
  const openCheckout = () => {
    setCheckoutOpen(true);
  };

  // Function to close the checkout modal
  const closeCheckout = () => {
    setCheckoutOpen(false);
  };

  // JSX for the component
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
        {/* List of items for sale */}
        <ul className="item-list">
          {items.map((item) => (
            <li key={item.id} className="item">
              <img
                src={item.image}
                alt={item.name}
                className="item-image"
              />
              <span className="item-details">
                {item.name} - €{item.price}
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
        {/* List of items in the shopping cart */}
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <span className="cart-item-details">
                {item.name} - €{item.price} (Quantity: {item.quantity})
              </span>
              <button className="remove-from-cart" onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
        {/* Display total price and checkout button */}
        <p className="total body-text">Total: €{calculateTotal()}</p>
        <button className="checkout" onClick={openCheckout}>
          Checkout
        </button>
        {/* Modal for checkout */}
        {isCheckoutOpen && (
          <div className="modal">
            <h2>Checkout</h2>
            <p>Total: €{calculateTotal()}</p>
            {/* Stripe checkout component */}
            <StripeCheckout
              stripeKey="your_stripe_public_key"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={calculateTotal() * 100} // amount in cents
              name="RecycleNow"
              description="Thank you for your Support!"
              image=""
            >
              <button className="checkout">Complete Purchase</button>
            </StripeCheckout>

            {/* Button to close the checkout modal */}
            <button className="checkout" onClick={closeCheckout}>
              Close
            </button>
          </div>
        )}
        {/* Overlay to cover the background when the modal is open */}
        {isCheckoutOpen && <div className="overlay" onClick={closeCheckout}></div>}
      </div>
    </div>
  );
};

export default Shop;
