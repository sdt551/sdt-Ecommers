import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Rout from "./Component/Rout";
import Navbarr from "./Component/Nav/Navbarr";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import { HomeProduct } from "./Component/Home/HomeProduct";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./FirbaseConfig";

function App() {
  // add to cart
  const [cart, setCart] = useState([]);
  //shop page
  const [shop, setShop] = useState(HomeProduct);
  //shop Search filter
  const [search, setSearch] = useState();
  // check out balence
  const [chekOutTotalBal, setchekOutTotalBal] = useState("");

  //add to cart
  const addToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This product is allready added in cart");
      setShop(HomeProduct);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  //shop category filter
  const handleClick = (x) => {
    const categoryFilter = HomeProduct.filter((product) => {
      return product.cat === x;
    });
    setShop(categoryFilter);
  };

  const allCategory = () => {
    setShop(HomeProduct);
  };
  //shop search filter

  const searchLength = (search || []).length === 0;
  const searchProduct = () => {
    if (searchLength) {
      alert("Please Search Something !");
      setShop(HomeProduct);
    } else {
      const searchFilter = HomeProduct.filter((x) => {
        const productCategory = x.cat.toLowerCase();
        // return x.cat === search;
        return productCategory.startsWith(search.toLowerCase());
      });
      setShop(searchFilter);
    }
  };

  const totalBal = (checkOutBal) => {
    setchekOutTotalBal(checkOutBal);
  };

  // firebase profile
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbarr
          search={search}
          setSearch={setSearch}
          searchProduct={searchProduct}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
        <Rout
          shop={shop}
          handleClick={handleClick}
          allCategory={allCategory}
          addToCart={addToCart}
          cart={cart}
          setCart={setCart}
          totalBal={totalBal}
          chekOutTotalBal={chekOutTotalBal}
          userDetails={userDetails}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
