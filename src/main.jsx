import React from "react";
import ReactDOM from "react-dom/client";
import { ShoppingCartApp } from "./ShoppingCartApp.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ShoppingCartApp />
    </React.StrictMode>
  </BrowserRouter>
);
