import { useContext } from "react";
import "./CartCss.css";
import Ordersummary from "./Ordersummary";
import Cartitems from "./Cartitems";
import cartContext from "../../context/CartContext";
import { Box } from "@mui/material";

const Cart = () => {
  // Cart Data
  const { cartItems, addTocart, removeFromcart } = useContext(cartContext);

  const totalprice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return (
    <Box className="cart">
      <Box className="cart-title">Your Shopping Cart</Box>
      <Box className="cart-wrapper">
        <Cartitems
          cartItems={cartItems}
          addTocart={addTocart}
          removeFromcart={removeFromcart}
        />
        <Ordersummary totalprice={totalprice} />
      </Box>
    </Box>
  );
};

export default Cart;
