import PropTypes from "prop-types"; // استيراد PropTypes
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartCss.css";
import { Box, Button, Rating, Typography } from "@mui/material";
const Cartitem = ({ cartItems, removeFromcart, addTocart }) => {
  // Cart Functions
  return (
    <Box className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => (
          <Box key={item.id} className="cart-item">
            <img
              className="cart-item-img"
              src={`${item.image}`}
              alt={item.title}
            ></img>
            <Box className="cart-item-info">
              <Box>
                <Typography variant="h4" className="cart-item-book-title">
                  {item.title}
                </Typography>
                <Rating
                  precision={0.1}
                  name="read-only"
                  value={item.rating?.rate || 0}
                  readOnly
                />
              </Box>
              <Box className="cart-item-quantityprice">
                <Box className="cart-item-quantity">
                  <Button
                    className=""
                    onClick={() => addTocart(item, "increase")}
                  >
                    <AddIcon />
                  </Button>
                  <Typography variant="h5">{item.quantity}</Typography>
                  <Button
                    className=""
                    disabled={item.quantity <= 1}
                    onClick={() => addTocart(item, "decrease")}
                  >
                    <RemoveIcon />
                  </Button>
                </Box>
                <Box className="cart-item-price">
                  <Typography variant="h6" className="cart-priceone">
                    ${item.price}
                  </Typography>
                  <Typography variant="h6" className="cart-totalprice">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
                <DeleteIcon
                  className="bi bi-trash-fill"
                  onClick={() => removeFromcart(item.id)}
                />
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <flexBox className="cart-empty">
          <Typography variant="h3">Your Cart is Empty</Typography>
          <a href="/">Shopping Now</a>
        </flexBox>
      )}
    </Box>
  );
};
Cartitem.propTypes = {
  cartItems: PropTypes.array.isRequired, // تحديد أن toggleDrawerCart هو دالة ومطلوب
  removeFromcart: PropTypes.func.isRequired, // تحديد أن toggleDrawerCart هو دالة ومطلوب
  addTocart: PropTypes.func.isRequired, // تحديد أن toggleDrawerCart هو دالة ومطلوب
};
export default Cartitem;
