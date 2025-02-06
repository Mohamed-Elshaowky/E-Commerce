import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [Myproducts, setMyproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setMyproducts(result);
        setLoading(false);
      } catch (error) {
        console.error("Error Fetching Data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ Myproducts, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};
ProductProvider.propTypes = {
  children: PropTypes.node, // تحديد أن toggleDrawerCart هو دالة ومطلوب
};

export default ProductsContext;
