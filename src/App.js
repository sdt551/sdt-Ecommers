import React from "react";
import { BrowserRouter } from "react-router-dom";
import Rout from "./Component/Rout";
import Navbarr from "./Component/Nav/Navbarr";
import "./App.css";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarr />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
