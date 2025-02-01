import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
// import { Myproducts } from "./Datafetching";
import PropTypes from "prop-types"; // استيراد PropTypes
import cartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
// Cart imports
const Main = ({ Myproducts = [], SearchValue }) => {
  const [alignment, setAlignment] = useState("all");

  const handleAlignment = (even, alignment) => {
    if (alignment !== null) {
      setAlignment(alignment);
    }
  };
  // products filter
  // قبل جلب البيانات من api خارجي
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (Myproducts && Array.isArray(Myproducts)) {
      setProducts(Myproducts);
    }
  }, [Myproducts]);
  const filterClick = (buttoncategory) => {
    if (buttoncategory == "all") {
      setProducts(Myproducts);
    } else {
      const productsArr = Myproducts.filter(
        (product) => product.category === buttoncategory
      );
      setProducts(productsArr);
    }
  };
  // Cart Data
  const { addTocart } = useContext(cartContext);
  //  to go ProductDetails
  const navigate = useNavigate();
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
            ".MuiButtonBase-root": {
              border: "1px solid #575151",
            },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ToggleButton
            value="all"
            aria-label="left aligned"
            onClick={() => {
              filterClick("all");
            }}
          >
            All Products
          </ToggleButton>
          <ToggleButton
            value="men's clothing"
            aria-label="centered"
            onClick={() => {
              filterClick("men's clothing");
            }}
          >
            Men
          </ToggleButton>
          <ToggleButton
            value="women's clothing"
            aria-label="right aligned"
            onClick={() => {
              filterClick("women's clothing");
            }}
          >
            Women
          </ToggleButton>
          <ToggleButton
            value="jewelery"
            aria-label="right aligned"
            onClick={() => {
              filterClick("jewelery");
            }}
          >
            jewelery
          </ToggleButton>
          <ToggleButton
            value="electronics"
            aria-label="right aligned"
            onClick={() => {
              filterClick("electronics");
            }}
          >
            electronics
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
        {products
          ?.filter((product) =>
            (product?.title || "")
              .toLocaleLowerCase()
              .includes((SearchValue || "").toLocaleLowerCase())
          )
          .map((product) => {
            return (
              <Card
                key={product.id}
                sx={{
                  width: 333,
                  height: 500,
                  cursor: "pointer",
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: ".35s",
                    rotate: "1.5deg",
                  },
                }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  image={product.image}
                  title="green iguana"
                />
                <CardContent
                  sx={{
                    height: 175,
                    overflow: "hidden",
                  }}
                >
                  <Stack
                    sx={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      overflow: "hidden",
                    }}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="subtitle"
                      component="p"
                      sx={{ color: "#9797e5" }}
                    >
                      ${product.price}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    {product.description.split(" ").slice(0, 15).join(" ") +
                      "..."}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      addTocart(product, "increase");
                    }}
                    sx={{ textTransform: "capitalize" }}
                    size="larg"
                  >
                    <AddShoppingCartOutlined fontSize="small" sx={{ mr: 1 }} />
                    Add to Cart
                  </Button>
                  <Rating
                    precision={0.1}
                    name="read-only"
                    value={product.rating?.rate || 0}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
      </Stack>
    </Container>
  );
};
Main.propTypes = {
  toggleDrawerCart: PropTypes.func.isRequired,
  openCart: PropTypes.bool.isRequired, // تحديد أن toggleDrawerCart هو دالة ومطلوب
  Myproducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired, // تأكد من أن "image" هو مصفوفة من السلاسل النصية
      rating: PropTypes.object.isRequired, // إضافة التقييم للمواصفات
    })
  ).isRequired, // تأكيد أن Myproducts هو مصفوفة تحتوي على كائنات بالخصائص
  SearchValue: PropTypes.string.isRequired,
};
export default Main;
