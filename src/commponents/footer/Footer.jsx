import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#283445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          flexWrap: "wrap",
        }}
        variant="h6"
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
            fontWeight: "800",
          }}
          variant="text"
          color="primary"
        >
          Elshaowky
        </Button>
        © 2024
      </Typography>
    </Box>
  );
};

export default Footer;
