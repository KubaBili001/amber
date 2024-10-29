import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

const Content: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="body" element={<></>} />
        {/* add additional routes when needed */}
      </Routes>
    </>
  );
};

export default Content;
