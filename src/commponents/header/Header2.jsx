import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import "./Header.css";
import { useContext, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types"; // استيراد PropTypes
import cartContext from "../../context/CartContext";
// Badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
// Menu options
const options = ["All Categories ", "Car", "Clothes", "Electronics"];

const Header2 = ({ toggleDrawerCart }) => {
  // Menu function
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // theme
  const theme = useTheme();
  // cartlenght
  const { cartItemsLength } = useContext(cartContext);
  return (
    <Container className="header2">
      <Typography className="logo">
        <ShoppingCartOutlinedIcon />
        E-commerce
      </Typography>
      <div className="search">
        <SearchIcon sx={{ color: "#777" }} />
        <input placeholder="Search..." className="searchinput"></input>
        <div className="menu">
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              padding: "0px",
              borderRadius: "10px",
              bgcolor: theme.palette.mycolor.main,
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <ListItemText
                secondary={options[selectedIndex]}
                sx={{
                  width: "100px",
                  textAlign: "center",
                  "&:hover": { cursor: "pointer" },
                }}
              />
              <ExpandMore />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "14px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <Typography>
        <IconButton
          aria-label="cart"
          to="/cart"
          onClick={toggleDrawerCart(true)}
        >
          <StyledBadge badgeContent={cartItemsLength} color="primary">
            <ShoppingCartOutlinedIcon onClick={() => toggleDrawerCart(true)} />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Typography>
    </Container>
  );
};
Header2.propTypes = {
  toggleDrawerCart: PropTypes.func.isRequired, // تحديد أن toggleDrawerCart هو دالة ومطلوب
};
export default Header2;
