import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Body from "./Products/Body";

const Content: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="body" element={<Body />} />
        {/* add additional routes when needed */}
      </Routes>
    </>
  );
};

export default Content;
