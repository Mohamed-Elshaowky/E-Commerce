import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Drawer,
  IconButton,
  Modal,
  Paper,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { Myproducts } from "./Prodects";
import PropTypes from "prop-types"; // استيراد PropTypes

// Cart imports
import "./CartCss.css";
import Ordersummary from "./Ordersummary";
import Cartitems from "./Cartitems";
import cartContext from "../../context/CartContext";
const Main = ({ toggleDrawerCart, openCart }) => {
  const [alignment, setAlignment] = useState("all");

  const handleAlignment = (event, aligment) => {
    if (alignment !== null) {
      setAlignment(alignment);
    }
    setAlignment(aligment);
  };
  // Handle modal
  const [selectedProduct, setSelectedProduct] = useState(null); // حالة لتخزين المنتج المحدد
  const [open, setOpen] = useState(false);
  const handleOpen = (product) => {
    setSelectedProduct(product); // تخزين المنتج الذي تم اختياره
    setOpen(true); // فتح الـ Modal
  };
  const handleClose = () => {
    setOpen(false); // إغلاق الـ Modal
    setSelectedProduct(null); // تفريغ المنتج المحدد
  };
  // products filter
  const [products, setProducts] = useState(Myproducts);

  const filterClick = (buttoncategory) => {
    const productsArr = Myproducts.filter((product) => {
      const cat = product.category.filter((mycat) => {
        return mycat === buttoncategory;
      });
      return cat[0] === buttoncategory;
    });
    setProducts(productsArr);
  };
  // select img
  const [selectedImg, setselectedImg] = useState(0);
  // Cart Data
  const { cartItems, addTocart, removeFromcart } = useContext(cartContext);

  const totalprice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return (
    <Container sx={{ paddingBottom: "10px" }}>
      <Stack
        sx={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          my: 2,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
        </Box>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              color: "#e94560",
              bgcolor: "initial",
            },
          }}
        >
          <ToggleButton
            value="all"
            aria-label="left aligned"
            onClick={() => {
              setProducts(Myproducts);
            }}
          >
            All Products
          </ToggleButton>
          <ToggleButton
            value="men"
            aria-label="centered"
            onClick={() => {
              filterClick("men");
            }}
          >
            Men
          </ToggleButton>
          <ToggleButton
            value="women"
            aria-label="right aligned"
            onClick={() => {
              filterClick("women");
            }}
          >
            Women
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 3,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              sx={{
                maxWidth: 333,
                ":hover .MuiCardMedia-root": {
                  scale: "1.1",
                  transition: ".35s",
                  rotate: "1.5deg",
                },
              }}
            >
              <CardMedia
                sx={{ height: 277 }}
                image={product.img[0]}
                title="green iguana"
              />
              <CardContent>
                <Stack
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="subtitle" component="p">
                    ${product.price}
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  onClick={() => handleOpen(product)}
                  sx={{ textTransform: "capitalize" }}
                  size="larg"
                >
                  <AddShoppingCartOutlined fontSize="small" sx={{ mr: 1 }} />
                  Add to Cart
                </Button>
                {selectedProduct && (
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Paper
                      sx={{
                        ".MuiStack-root": {
                          maxWidth: {
                            sm: "90%",
                            md: 800,
                          },
                        },
                        position: "relative",
                      }}
                    >
                      <IconButton
                        sx={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          transition: ".3s",
                          color: "#d67a4c",
                          ":hover": { rotate: "180deg", color: "red" },
                        }}
                        className="closeDrawer"
                        onClick={handleClose}
                      >
                        <Close />
                      </IconButton>
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          gap: 2.5,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            width={300}
                            height={"100%"}
                            alt=""
                            src={selectedProduct.img[selectedImg]}
                          ></img>
                        </Box>
                        <Box
                          sx={{
                            textAlign: { xs: "center", sm: "left" },
                            margin: " 30px 0",
                            padding: "0 5px",
                          }}
                        >
                          <Typography variant="h5">
                            {selectedProduct.title}
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "crimson",
                              fontSize: "22px",
                              margin: ".4 0",
                            }}
                          >
                            ${selectedProduct.price}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {selectedProduct.description}
                          </Typography>
                          <Stack
                            direction={"row"}
                            sx={{
                              gap: 1,
                              my: 1.5,
                              justifyContent: { xs: "center", sm: "left" },
                            }}
                          >
                            <ToggleButtonGroup
                              value={selectedImg}
                              exclusive
                              onChange={handleAlignment}
                              sx={{
                                ".Mui-selected": {
                                  bgcolor: "initial",
                                  opacity: "1",
                                },
                              }}
                            >
                              {selectedProduct.img.map((image, index) => (
                                <ToggleButton
                                  value={index}
                                  aria-label="left aligned"
                                  key={index}
                                  sx={{
                                    p: 0,
                                    mx: 1,
                                    opacity: "0.5",
                                    border: "none",
                                    width: "110px",
                                    height: "110px",
                                  }}
                                >
                                  <img
                                    onClick={() => setselectedImg(index)}
                                    width={"100%"}
                                    height={"100%"}
                                    src={image}
                                    style={{
                                      borderRadius: 3,
                                      cursor: "pointer",
                                    }}
                                    alt=""
                                  />
                                </ToggleButton>
                              ))}
                            </ToggleButtonGroup>
                          </Stack>
                          <Button
                            sx={{ textTransform: "capitalize" }}
                            variant="contained"
                            onClick={() =>
                              addTocart({ ...selectedProduct, quantity: +1 })
                            }
                          >
                            <AddShoppingCartOutlined
                              fontSize="small"
                              sx={{ mr: 1 }}
                            />
                            Buy Now
                          </Button>
                        </Box>
                      </Stack>
                    </Paper>
                  </Modal>
                )}
                <Rating
                  precision={0.1}
                  name="read-only"
                  value={product.rating}
                  readOnly
                />
              </CardActions>
            </Card>
          );
        })}
      </Stack>
      <Drawer
        sx={{
          " .MuiPaper-root": {
            height: "100%",
          },
          " .css-wm6t5u ": {
            width: "100%",
            minWidth: "250px",
            maxWidth: "500px",
          },
        }}
        anchor={"right"}
        open={openCart}
        onClose={toggleDrawerCart(false)}
      >
        {
          <Box
            sx={{
              width: "400px",
              mx: "auto",
              mt: "10px",
              position: "relative",
              borderRadius: "1rem",
            }}
            className="drawer"
          >
            <IconButton
              sx={{
                position: "absolute",
                top: "7px",
                right: "10px",
                transition: ".3s",
                ":hover": { rotate: "180deg", color: "red" },
              }}
              className="closeDrawer"
              onClick={toggleDrawerCart(false)}
            >
              <Close />
            </IconButton>
            <Box className="cart">
              <Typography className="cart-title">Your Shopping Cart</Typography>
              <Box className="cart-wrapper">
                <Cartitems
                  cartItems={cartItems}
                  addTocart={addTocart}
                  removeFromcart={removeFromcart}
                />
                <Ordersummary totalprice={totalprice} />
              </Box>
            </Box>
          </Box>
        }
      </Drawer>
    </Container>
  );
};
Main.propTypes = {
  toggleDrawerCart: PropTypes.func.isRequired,
  openCart: PropTypes.func.isRequired, // تحديد أن toggleDrawerCart هو دالة ومطلوب
};
export default Main;
