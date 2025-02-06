import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Header1 from "./commponents/header/Header1";
import Header2 from "./commponents/header/Header2";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./commponents/hero/Hero";
import Main from "./commponents/main/Main";
import Footer from "./commponents/footer/Footer";
import ScrollTotop from "./commponents/scroll/ScrollTotop";
import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./commponents/main/Cart";
// تعديل Router
import PropTypes from "prop-types";
import ProductDetails from "./commponents/main/ProductDetails";
import LogForm from "./commponents/main/logForm";
import ProductsContext, { ProductProvider } from "./context/ProductsContext";
const MainPage = ({ openCart, toggleDrawerCart, SearchValue }) => {
  const { Myproducts, loading } = useContext(ProductsContext);
  return (
    <>
      <Hero />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Main
          Myproducts={Myproducts}
          loading={loading}
          openCart={openCart}
          toggleDrawerCart={toggleDrawerCart}
          SearchValue={SearchValue}
        />
      )}
    </>
  );
};
// تعديل Router
function App() {
  // Search
  const [SearchValue, setSearchValue] = useState("");
  const [theme, colorMode] = useMode();
  // Drawer Cart
  const [openCart, setOpenCart] = useState(false);

  const toggleDrawerCart = (newOpen) => () => {
    setOpenCart(newOpen);
  };
  return (
    <ProductProvider>
      <BrowserRouter>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh", // يجعل الصفحة تأخذ الارتفاع بالكامل
          }}
        >
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box sx={{ flex: 1 }}>
                <Header1 />
                <Header2
                  toggleDrawerCart={toggleDrawerCart}
                  SearchValue={SearchValue}
                  setSearchValue={setSearchValue}
                />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <MainPage
                        openCart={openCart}
                        toggleDrawerCart={toggleDrawerCart}
                        SearchValue={SearchValue}
                      />
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <Cart
                        toggleDrawerCart={toggleDrawerCart}
                        openCart={openCart}
                      />
                    }
                  />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/logform" element={<LogForm />} />
                </Routes>
              </Box>
              <Footer />
              <ScrollTotop />
            </ThemeProvider>
          </ColorModeContext.Provider>
        </Box>
      </BrowserRouter>
    </ProductProvider>
  );
}
// إضافة PropTypes للتحقق من صحة البيانات
MainPage.propTypes = {
  Myproducts: PropTypes.array.isRequired, // لأن البيانات عبارة عن مصفوفة
  loading: PropTypes.bool.isRequired, // Boolean لأن اللودينج true/false
  openCart: PropTypes.bool.isRequired, // Boolean
  toggleDrawerCart: PropTypes.func.isRequired, // Boolean
  SearchValue: PropTypes.string.isRequired,
};

export default App;
