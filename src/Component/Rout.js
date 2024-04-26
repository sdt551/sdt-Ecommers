import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";

function Rout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default Rout;
