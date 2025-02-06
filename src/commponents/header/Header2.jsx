import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Container, IconButton, Typography } from "@mui/material";
import "./Header.css";
import { useContext } from "react";
import PropTypes from "prop-types"; // استيراد PropTypes
import cartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
// Badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header2 = ({ toggleDrawerCart, SearchValue, setSearchValue }) => {
  // cartlenght
  const { cartItemsLength } = useContext(cartContext);

  // to go to anther page

  const navigate = useNavigate();
  return (
    <Container className="header2">
      <Typography
        className="logo"
        onClick={() => {
          toggleDrawerCart(true);
          navigate("/");
        }}
      >
        <ShoppingCartOutlinedIcon />
        E-commerce
      </Typography>
      <div className="search">
        <SearchIcon sx={{ color: "#777" }} />
        <input
          placeholder="Search..."
          className="searchinput"
          value={SearchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </div>
      <Typography>
        <IconButton
          aria-label="cart"
          to="/cart"
          onClick={() => {
            toggleDrawerCart(true);
            navigate("/cart");
          }}
        >
          <StyledBadge badgeContent={cartItemsLength} color="primary">
            <ShoppingCartOutlinedIcon />
          </StyledBadge>
        </IconButton>
        <IconButton
          onClick={() => {
            toggleDrawerCart(true);
            navigate("/logform");
          }}
        >
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Typography>
    </Container>
  );
};
Header2.propTypes = {
  toggleDrawerCart: PropTypes.func.isRequired, // تحديد أن toggleDrawerCart هو دالة ومطلوب
  SearchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
export default Header2;
