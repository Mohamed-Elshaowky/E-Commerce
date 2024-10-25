import { ArrowForward } from "@mui/icons-material";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import IconSection from "./IconSection";

const Hero = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2.5, gap: 2 }}>
        <Box
          sx={{
            flexGrow: 1,
            position: "relative",
          }}
        >
          <img width={"100%"} src="Images\banner-15.jpg"></img>
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              ml: 7,
              "@media (max-width: 470px)": {
                ml: "10px",
              },
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#283445",
                fontSize: "28px",
                fontWeight: "bold",
                "@media (max-width: 767px)": {
                  fontSize: "18px",
                },
                "@media (max-width: 470px)": {
                  fontSize: "12px",
                },
              }}
            >
              LIFESTYLE COLLECTION
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#283445",
                fontSize: "44px",
                "@media (max-width: 767px)": {
                  fontSize: "22px",
                },
                "@media (max-width: 470px)": {
                  fontSize: "16px",
                },
              }}
            >
              MEN
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#283445",
                fontSize: "28px",
                fontWeight: "bold",
                "@media (max-width: 767px)": {
                  fontSize: "18px",
                },
                "@media (max-width: 470px)": {
                  fontSize: "12px",
                },
              }}
            >
              SALE TO 30% OFF
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#283445",
                fontSize: "18px",
                display: "flex",
                flexWrap: "wrap",
                "@media (max-width: 767px)": {
                  fontSize: "12px",
                },
                "@media (max-width: 470px)": {
                  fontSize: "8px",
                },
              }}
            >
              Get Free Shopping on orders over $99.99
            </Typography>
            <Link
              sx={{
                bgcolor: "black",
                padding: "10px 20px",
                width: "160px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: ".3s",
                justifyContent: "center",
                ":hover": {
                  color: "#d50000",
                },
                "@media (max-width: 767px)": {
                  padding: "5px 10px",
                  width: "100px",
                  fontSize: "12px",
                },
                "@media (max-width: 470px)": {
                  fontSize: "8px",
                },
              }}
              href="#"
              underline="none"
            >
              Shop Now
            </Link>
          </Stack>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.66%" } }}>
          <Box className="image1" sx={{ position: "relative" }}>
            <img width={"100%"} src="Images\banner-17.jpg"></img>
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                ml: 5,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "16px",
                }}
              >
                New ARRIVALS
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "18px",
                }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "18px",
                }}
              >
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: ".3s",
                  ":hover": {
                    color: "#d50000",
                  },
                }}
                href="#"
                underline="none"
              >
                Shop Now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box className="image2" sx={{ position: "relative" }}>
            <img width={"100%"} src="Images\banner-16.jpg"></img>
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                ml: 5,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "18px",
                }}
              >
                GAMING 4k
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "18px",
                }}
              >
                DESKTOPS &
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "18px",
                }}
              >
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: ".3s",
                  ":hover": {
                    color: "#d50000",
                  },
                }}
                href="#"
                underline="none"
              >
                Shop Now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
};

export default Hero;
