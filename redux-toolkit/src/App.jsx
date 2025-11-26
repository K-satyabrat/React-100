import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
