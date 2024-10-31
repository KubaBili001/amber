import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import { bodyData } from "../data/productsData";
import ProductsList from "./Products/ProductsList";

const Content: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="body" element={<ProductsList data={bodyData} />} />
        {/* add additional routes when needed */}
      </Routes>
    </>
  );
};

export default Content;
