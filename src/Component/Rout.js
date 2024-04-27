import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";

function Rout({ shop, handleClick, allCategory, addToCart }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="/shop"
          element={
            <Shop
              shop={shop}
              handleClick={handleClick}
              allCategory={allCategory}
              addToCart={addToCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default Rout;
