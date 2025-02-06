import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Rating,
  Grid2,
} from "@mui/material";
import cartContext from "../../context/CartContext";
import ProductsContext from "../../context/ProductsContext";

const ProductDetails = () => {
  const { id } = useParams(); // استخراج id من الرابط
  const { Myproducts, loading } = useContext(ProductsContext);

  const { addTocart } = useContext(cartContext);
  const navigate = useNavigate();
  if (loading) return <CircularProgress />;
  const product = Myproducts.find((p) => p.id === Number(id));
  if (!product) return <Typography variant="h6">Product not found</Typography>;
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        padding: 4,
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <img src={product.image} alt={product.title} width="200" />
      <Box sx={{ textAlign: "left", ml: { xs: "0", md: "2rem" }, my: "2rem" }}>
        <Typography variant="h4">{product.title}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Grid2>
          <Typography variant="h6" sx={{ color: "gray" }}>
            ${product.price}
          </Typography>
          <Rating value={product.rating?.rate || 0} readOnly />
        </Grid2>
        <Box>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={(e) => {
              e.stopPropagation();
              addTocart(product);
            }}
          >
            Add to Cart
          </Button>
          <Button
            onClick={() => navigate(-1)}
            variant="outlined"
            sx={{ mt: 2, ml: 2 }}
          >
            Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
