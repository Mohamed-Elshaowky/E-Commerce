import { useTheme } from "@emotion/react";
import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

const IconSection = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{ bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff", mt: 1 }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width:768px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <MyBox
          icon={<ElectricBolt />}
          title={"Fast Dalivery"}
          text={"Start From $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined />}
          title={"Money Guarantee"}
          text={"& Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlined />}
          title={"365 Days"}
          text={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlined />}
          title={"Payment"}
          text={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;
// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, text }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        width: "200px",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: useMediaQuery("(min-width:768px)") ? "center" : "left",
        py: 1,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {text}
        </Typography>
      </Box>
      <Box></Box>
    </Box>
  );
};
