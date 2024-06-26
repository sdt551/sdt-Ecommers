import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";
import CheckOut from "./CheckOut/CheckOut";
import SignUP from "./SignUP/SignUP";
import SignIN from "./SignIN/SignIN";
import Error from "./Error/Error";

function Rout({
  shop,
  handleClick,
  allCategory,
  addToCart,
  cart,
  setCart,
  totalBal,
  chekOutTotalBal,
  userDetails,
}) {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUP />} />
        <Route path="signin" element={<SignIN />} />
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              totalBal={totalBal}
              userDetails={userDetails}
            />
          }
        />
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
        <Route
          path="/checkout"
          element={
            <CheckOut
              chekOutTotalBal={chekOutTotalBal}
              cart={cart}
              userDetails={userDetails}
            />
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Rout;
