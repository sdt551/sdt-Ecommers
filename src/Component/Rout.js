import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";

function Rout({ shop, handleClick, allCategory, addToCart, cart, setCart }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Rout;
