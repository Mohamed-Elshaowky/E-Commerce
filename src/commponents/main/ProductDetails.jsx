import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Rating,
} from "@mui/material";
import cartContext from "../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams(); // استخراج id من الرابط
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const { addTocart } = useContext(cartContext);
  const navigate = useNavigate();
  if (loading) return <CircularProgress />;
  if (!product) return <Typography variant="h6">Product not found</Typography>;
  return (
    <Box sx={{ textAlign: "center", padding: 4 }}>
      <img src={product.image} alt={product.title} width="200" />
      <Typography variant="h4">{product.title}</Typography>
      <Typography variant="h6" sx={{ color: "gray" }}>
        ${product.price}
      </Typography>
      <Rating value={product.rating?.rate || 0} readOnly />
      <Typography variant="body1">{product.description}</Typography>
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
  );
};

export default ProductDetails;
