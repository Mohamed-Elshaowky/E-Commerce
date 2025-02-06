import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types"; // استيراد PropTypes
const Ordersummary = ({ totalprice }) => {
  return (
    <Box className="cart-order-summary">
      <Box className="order-summary-title">ORDER SUMMARY</Box>
      <Box className="order-summary-item">
        <Typography variant="h6">Subtotal </Typography>
        <Typography variant="h6">${totalprice}</Typography>
      </Box>
      <Box className="order-summary-item">
        <Typography variant="h6">Shopping Cost </Typography>
        <Typography variant="h6">0</Typography>
      </Box>
      <flexBox className="order-summary-item">
        <Typography variant="h6">Discount </Typography>
        <Typography variant="h6">0</Typography>
      </flexBox>
      <Box className="order-summary-item">
        <Typography variant="h6">Total </Typography>
        <Typography variant="h6">${totalprice}</Typography>
      </Box>
    </Box>
  );
};
Ordersummary.propTypes = {
  totalprice: PropTypes.string.isRequired, // تحديد أن toggleDrawerCart هو دالة ومطلوب
};
export default Ordersummary;
