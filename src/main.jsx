import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Providercart from "./context/Providercart";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providercart>
      <App />
    </Providercart>
  </StrictMode>
);
