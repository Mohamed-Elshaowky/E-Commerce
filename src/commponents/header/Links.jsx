import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const Links = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        ":hover .show-when-hover": { display: "block" },
        ":hover": { cursor: "pointer" },
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
          zIndex: "2",
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "15px" },
                    }}
                    primary="Dashbord"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "15px" },
                    }}
                    primary="Products"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "15px" },
                    }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
