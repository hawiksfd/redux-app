import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowProduct from "./components/ShowProduct";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="add" element={<AddProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
