import PropTypes from "prop-types"; // استيراد PropTypes
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
const Cartitem = ({ cartItems, removeFromcart, addTocart }) => {
  // Cart Functions
  return (
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              className="cart-item-img"
              src={`${item.img[0]}`}
              alt={item.title}
            ></img>
            <div className="cart-item-info">
              <div>
                <div className="cart-item-book-title">{item.title}</div>
                <div className="cart-item-book-author">{item.description}</div>
              </div>
              <div className="cart-item-quantityprice">
                <div className="cart-item-quantity">
                  <button
                    className=""
                    onClick={() =>
                      addTocart({
                        ...item,
                        quantity: parseInt(item.quantity) + 1,
                      })
                    }
                  >
                    <AddIcon />
                  </button>
                  <b>{item.quantity}</b>
                  <button
                    className=""
                    disabled={item.quantity <= 1}
                    onClick={() =>
                      addTocart({
                        ...item,
                        quantity: parseInt(item.quantity) - 1,
                      })
                    }
                  >
                    <RemoveIcon />
                  </button>
                </div>
                <div className="cart-item-price">
                  <div className="cart-priceone">${item.price}</div>
                  <div className="cart-totalprice">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
                <DeleteIcon
                  className="bi bi-trash-fill"
                  onClick={() => removeFromcart(item.id)}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="cart-empty">
          <h2>Your Cart is Empty</h2>
        </div>
      )}
    </div>
  );
};
Cartitem.propTypes = {
  cartItems: PropTypes.func.isRequired, // تحديد أن toggleDrawerCart هو دالة ومطلوب
  removeFromcart: PropTypes.func.isRequired, // تحديد أن toggleDrawerCart هو دالة ومطلوب
  addTocart: PropTypes.func.isRequired, // تحديد أن toggleDrawerCart هو دالة ومطلوب
};
export default Cartitem;
