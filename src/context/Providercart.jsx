import { useState } from "react";
import CartContext from "./CartContext";
import PropTypes from "prop-types"; // استيراد PropTypes
const Providercart = ({ children }) => {
  const [cartItems, setCartITems] = useState([]);
  // Add To Cart
  const addTocart = (item) => {
    const isExist = cartItems.find((cart) => cart.id === item.id);
    if (isExist) {
      setCartITems(
        cartItems.map((cartItem) => (cartItem.id === item.id ? item : cartItem))
      );
    } else {
      setCartITems((prev) => [...prev, item]);
    }
  };
  // Remove from cart
  const removeFromcart = (id) => {
    const cart = cartItems.filter((c) => c.id !== id);
    setCartITems(cart);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addTocart,
        removeFromcart,
        cartItemsLength: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
Providercart.propTypes = {
  children: PropTypes.func, // تحديد أن toggleDrawerCart هو دالة ومطلوب
};
export default Providercart;
