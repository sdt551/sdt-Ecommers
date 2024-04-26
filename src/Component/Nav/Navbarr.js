import React from "react";
import "./Nav.css";
import Logo from "./Img/logo.png";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiSearch, CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Navbarr() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div className="header w-100">
      <div className="top-header d-flex w-100 py-3 bg-light align-items-center border-bottom border-warning">
        <div className="icon ms-3 text-info h5">
          <LiaShippingFastSolid />
        </div>
        <div className="info ms-2 text-info h5">
          <p>Free Shipping When Sopping</p>
        </div>
      </div>
      <div className="mid-header d-flex p-3 bg-light w-100 justify-content-between align-items-center">
        <div className="logo d-flex align-items-center">
          <img src={Logo} alt="" />
          <h4>shahadat</h4>
        </div>
        <div className="search-box input-group w-25">
          <input
            className="form-control p-1"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <Button>
            <CiSearch className="h5" />
          </Button>
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
            <div className="text-dark">
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
              <NavLink className="nav-link px-2 nav-item" to="/collection">
                Collection
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
