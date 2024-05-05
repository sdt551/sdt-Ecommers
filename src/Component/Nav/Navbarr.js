import React from "react";
import "./Navbarr.css";
import Logo from "./Img/logo.png";
import { CiSearch, CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

function Navbarr({ search, setSearch, searchProduct }) {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleChang = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="header w-100">
      <div className="mid-header d-flex p-3 bg-success w-100 justify-content-between align-items-center">
        <div className="logo d-flex align-items-center">
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
          <button className="btn btn-primary" onClick={searchProduct}>
            <CiSearch className="h5" />
          </button>
        </div>

        <div className="d-flex align-items-center">
          {isAuthenticated ? (
            <div className="user d-flex align-items-center">
              <div className="icon me-1">
                <CiLogout className="h4" />
              </div>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="user d-flex align-items-center">
              <div className="icon me-1">
                <CiLogin className="h4" />
              </div>
              <button onClick={() => loginWithRedirect()}>Login </button>
            </div>
          )}
        </div>
      </div>

      <div className="nav w-100 bg-secondary p-3 d-flex align-items-center justify-content-between">
        <div>
          {isAuthenticated ? (
            <div>
              <img
                style={{ borderRadius: "50%" }}
                src={user.picture}
                alt={user.name}
              />
            </div>
          ) : (
            <div className="text-warning d-flex align-items-center">
              <FaUser className="me-2 border rounded p-1 h4" />
              <h5>Please login</h5>
            </div>
          )}
        </div>

        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto all-manu">
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
          </Navbar.Collapse>
        </Navbar>

        <div className="offer text-dark">
          <p className="bg-warning p-3 rounded">Flat 10% over all iphone</p>
        </div>
      </div>
    </div>
  );
}

export default Navbarr;
