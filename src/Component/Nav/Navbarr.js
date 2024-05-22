import React, { useEffect, useState } from "react";
import "./Navbarr.css";
import Logo from "./Img/logo.png";
import { CiSearch, CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { auth, db } from "../../FirbaseConfig";
import { doc, getDoc } from "firebase/firestore";

function Navbarr({ search, setSearch, searchProduct }) {
  const navigate = useNavigate();
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

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUserDetails(null);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChang = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const [mobile, setMobile] = useState(false);

  return (
    <div className="header w-100">
      <div className="mid-header d-flex p-3 bg-success w-100 justify-content-between align-items-center">
        <div
          className="logo d-flex align-items-center"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="" />
        </div>
        <div className="search-box input-group w-25">
          <input
            className="form-control p-1"
            type="text"
            value={search}
            name=""
            id=""
            placeholder="Search"
            onChange={handleChang}
          />
          <NavLink
            to={search && "/shop"}
            className="btn btn-primary d-flex align-items-center"
            onClick={searchProduct}
          >
            <CiSearch className="h5" />
          </NavLink>
        </div>

        <div className="d-flex align-items-center">
          {userDetails ? (
            <div className="user d-flex align-items-center btn btn-light py-1 px-2">
              <div className="icon me-1">
                <CiLogout className="h4" />
              </div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="user d-flex align-items-center btn btn-light py-1 px-2">
              <div className="icon me-1">
                <CiLogin className="h4" />
              </div>
              <button onClick={() => navigate("/signin")}>Login </button>
            </div>
          )}
        </div>
      </div>

      <div className="nav w-100 bg-secondary p-3 d-flex align-items-center justify-content-between g-5 manubar">
        <div>
          {userDetails ? (
            <div>
              <h5 className="text-uppercase text-light">
                {userDetails.firstName}
              </h5>
              {/* <img
                style={{ borderRadius: "50%" }}
                src={user.picture}
                alt={user.name}
              /> */}
            </div>
          ) : (
            <div className="text-warning d-flex align-items-center">
              <FaUser className="me-2 border rounded p-1 h4" />
            </div>
          )}
        </div>
        <div className="mobile-manu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <ImCross className="text-danger" /> : <FaBars />}
        </div>

        <Nav className={mobile ? "nav-link-mobile" : "all-manu"}>
          <NavLink className="nav-link px-2 nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link px-2 nav-item" to="/shop">
            Shop
          </NavLink>
          <NavLink className="nav-link px-2 nav-item" to="/cart">
            Cart
          </NavLink>
          <NavLink className="nav-link px-2 nav-item" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link px-2 nav-item" to="/contact">
            Contact
          </NavLink>
        </Nav>
      </div>
    </div>
  );
}

export default Navbarr;
