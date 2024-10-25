import { CssBaseline, ThemeProvider } from "@mui/material";
import Header1 from "./commponents/header/Header1";
import Header2 from "./commponents/header/Header2";
import Header3 from "./commponents/header/Header3";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./commponents/hero/Hero";
import Main from "./commponents/main/Main";
import Footer from "./commponents/footer/Footer";
import ScrollTotop from "./commponents/scroll/ScrollTotop";
import { useState } from "react";
function App() {
  const [theme, colorMode] = useMode();
  // Drawer Cart
  const [openCart, setOpenCart] = useState(false);

  const toggleDrawerCart = (newOpen) => () => {
    setOpenCart(newOpen);
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 toggleDrawerCart={toggleDrawerCart} />
        <Header3 />
        <Hero />
        <Main toggleDrawerCart={toggleDrawerCart} openCart={openCart} />
        <Footer />
        <ScrollTotop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
