// CartContext.js

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (item, quantityToAdd = 1) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      // If item already exists in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      const updatedQuantity =
        updatedCartItems[existingItemIndex].quantity + quantityToAdd;
      if (updatedQuantity <= 0) {
        // If updated quantity is zero or negative, remove the item from cart
        updatedCartItems.splice(existingItemIndex, 1);
      } else {
        updatedCartItems[existingItemIndex].quantity = updatedQuantity;
      }
      setCartItems(updatedCartItems);
    } else if (quantityToAdd > 0) {
      // If item is not in the cart and quantity to add is positive, add it to the cart
      setCartItems([...cartItems, { ...item, quantity: quantityToAdd }]);
    }

    // Update cart item count
    setCartItemCount((prevCount) => prevCount + quantityToAdd);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
