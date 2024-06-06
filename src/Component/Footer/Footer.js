import React from "react";
import "./Footer.css";
import Logo from "../Nav/Img/logo.png";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div
        className="footer container-fluid"
        style={{ backgroundColor: "#E8F0FE" }}
      >
        <div className="row p-3 mt-3">
          <div className="right-box">
            <div className="header text-center">
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ cursor: "pointer" }}
              >
                <img src={Logo} alt="" />
                <h4>shahadat</h4>
              </div>
              <p className="px-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis distinctio ducimus animi quisquam ab. Aliquid!
              </p>
            </div>

            <div className="bottom row mt-3 d-flex justify-content-center px-5">
              <div className="box mb-2 col col-12 col-sm-6 col-md-4 px-2">
                <h3>Your Account</h3>
                <ul>
                  <li>About</li>
                  <li>Account</li>
                  <li>Payment</li>
                  <li>Sales</li>
                </ul>
              </div>
              <div className="box mb-2 col col-12 col-sm-6 col-md-4 px-2">
                <h3>Products</h3>
                <ul>
                  <li>Delivery</li>
                  <li>Track Oder</li>
                  <li>New Product</li>
                  <li>Old Product</li>
                </ul>
              </div>
              <div className="box mb-2 col col-12 col-sm-6 col-md-4 px-2">
                <h3>Cotack Us</h3>
                <ul>
                  <li>017xx-xxxxxx</li>
                  <li className="text-lowercase">
                    shahadathossen551@gmail.com
                  </li>
                  <li>
                    <div className="icon d-flex mt-2">
                      <FaFacebook className="me-2 h4" />
                      <FaYoutube className="me-2 h4" />
                      <FaInstagram className="me-2 h4" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
