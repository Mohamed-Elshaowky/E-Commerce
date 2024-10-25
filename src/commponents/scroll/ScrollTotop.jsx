import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";

const ScrollTotop = () => {
  return (
    <Zoom
      in={useScrollTrigger()}
      sx={{
        position: "fixed",
        right: 22,
        bottom: 22,
      }}
    >
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        color="primary"
        aria-label="add"
        size="small"
      >
        <KeyboardArrowUp fontSize="large" sx={{ color: "#fff" }} />
      </Fab>
    </Zoom>
  );
};

export default ScrollTotop;
