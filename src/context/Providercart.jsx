import { useState } from "react";
import CartContext from "./CartContext";
import PropTypes from "prop-types"; // استيراد PropTypes
const Providercart = ({ children }) => {
  const [cartItems, setCartITems] = useState([]);
  // Add To Cart
  const addTocart = (item, action = "increase") => {
    setCartITems((prevCart) => {
      const isExist = prevCart.find((cart) => cart.id === item.id);

      if (isExist) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  action === "increase"
                    ? cartItem.quantity + 1
                    : Math.max(cartItem.quantity - 1, 1),
              }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
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
  children: PropTypes.node, // تحديد أن toggleDrawerCart هو دالة ومطلوب
};
export default Providercart;
