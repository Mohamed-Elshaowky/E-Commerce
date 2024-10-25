import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Header.css";

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box className="header1" sx={{ bgcolor: "#2B3445" }}>
      <Container className="header1">
        <Stack direction={"row"}>
          <Typography className="hot" variant="body2">
            HOT
          </Typography>
          <Typography className="msg" variant="body2">
            Free Express Shoping
          </Typography>
        </Stack>
        <Stack className="icons" direction={"row"}>
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ color: "#ffc457" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined />
              </IconButton>
            )}
          </div>
          <FacebookIcon sx={{ color: "#74b0ff", cursor: "pointer" }} />
          <XIcon sx={{ color: "#657786", cursor: "pointer" }} />
          <InstagramIcon sx={{ color: "#e1306c", cursor: "pointer" }} />
        </Stack>
      </Container>
    </Box>
  );
}
