import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowProduct from "./components/ShowProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<ShowProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
