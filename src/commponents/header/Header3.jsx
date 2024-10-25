import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
// Material ICons
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import { useTheme } from "@emotion/react";
import { ExpandMore } from "@mui/icons-material";
import Links from "./Links";

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Theme
  const theme = useTheme();
  // Drawer
  const [openn, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  // DrawerOptions arr
  const drawerOptions = [
    {
      id: 1,
      name: "Home",
      links: [
        { linkname: "Link 1", href: "/" },
        { linkname: "Link 2", href: "/" },
      ],
    },
    {
      id: 2,
      name: "Mega menu",
      links: [
        { linkname: "Link 3", href: "/" },
        { linkname: "Link 4", href: "/" },
      ],
    },
    {
      id: 3,
      name: "Full screen menu",
      links: [
        { linkname: "Link 5", href: "/" },
        { linkname: "Link 6", href: "/" },
      ],
    },
    {
      id: 4,
      name: "Pages",
      links: [
        { linkname: "Link 7", href: "/" },
        { linkname: "Link 8", href: "/" },
      ],
    },
    {
      id: 5,
      name: "User acount",
      links: [
        { linkname: "Link 9", href: "/" },
        { linkname: "Link 10", href: "/" },
      ],
    },
    {
      id: 6,
      name: "vender acount",
      links: [
        { linkname: "Link 11", href: "/" },
        { linkname: "Link 12", href: "/" },
        { linkname: "Link 13", href: "/" },
      ],
    },
  ];
  return (
    <Container className="header3" sx={{ mt: 5, pb: 2 }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: "220px",
          bgcolor: theme.palette.mycolor.main,
          color: theme.palette.text.secondary,
        }}
      >
        <WindowIcon />
        <Typography
          sx={{
            padding: "0",
            textTransform: "capitalize",
            mx: 1,
            flexGrow: 1,
          }}
        >
          Categories
        </Typography>
        <KeyboardArrowRightIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            width: "220px",
            bgcolor: theme.palette.mycolor.main,
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ElectricBikeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bikes</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LaptopChromebookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Electronics</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Books</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SportsEsportsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Games</ListItemText>
        </MenuItem>
      </Menu>
      {useMediaQuery("(min-width:992px)") && (
        <Stack gap={4} alignItems={"center"} direction={"row"}>
          <Links title={"Home"} />
          <Links title={"Menu"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vender Account"} />
        </Stack>
      )}
      {useMediaQuery("(max-width:992px)") && (
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        sx={{
          " .MuiPaper-root": {
            height: "100%",
          },
          ".MuiBox-root": {
            width: "90%",
          },
        }}
        anchor={"top"}
        open={openn}
        onClose={toggleDrawer(false)}
      >
        {
          <Box
            sx={{
              width: { sm: "300px", md: "400px" },
              mx: "auto",
              mt: "50px",
              position: "relative",
              bgcolor: theme.palette.mycolor.main,
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
              onClick={toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
            <List
              className="list"
              sx={{
                mt: "40px",
                width: { sm: "300px", md: "400px" },
                px: 0,
                mx: 0,
              }}
            >
              {drawerOptions.map((item) => {
                return (
                  <Accordion
                    key={item.id}
                    elevation={0}
                    sx={{ Height: "fit-content", bgcolor: "initial" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panelie-content"
                      id="panelia-header"
                    >
                      <Typography>{item.name}</Typography>
                    </AccordionSummary>
                    <List sx={{ px: "10px", my: 0 }}>
                      {item.links.map((link) => {
                        return (
                          <ListItem key={link} sx={{ py: "0", my: 0 }}>
                            <ListItemButton component="a" href={link.href}>
                              <ListItemText primary={link.linkname} />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Accordion>
                );
              })}
            </List>
          </Box>
        }
      </Drawer>
    </Container>
  );
}
