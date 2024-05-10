import React from "react";
import "./Footer.css";
import Logo from "../Nav/Img/logo.png";

import {
  FaFacebook,
  FaHeadphonesAlt,
  FaInstagram,
  FaPiggyBank,
  FaShippingFast,
  FaWallet,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer container-fluid">
        <div className="row p-3 mt-3">
          <div className="left-box col col-md-3 col-12">
            <div className="box d-flex align-items-center pb-3">
              <div className="icon-box">
                <FaPiggyBank className="h4 text-danger" />
              </div>
              <div className="detail ms-3">
                <h3>Great Saving</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="box d-flex align-items-center pb-3">
              <div className="icon-box">
                <FaShippingFast className="h4 text-danger" />
              </div>
              <div className="detail ms-3">
                <h3>Free Delyvery</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="box d-flex align-items-center pb-3">
              <div className="icon-box">
                <FaHeadphonesAlt className="h4 text-danger" />
              </div>
              <div className="detail ms-3">
                <h3>24x7 Support</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="box d-flex align-items-center pb-3">
              <div className="icon-box">
                <FaWallet className="h4 text-danger" />
              </div>
              <div className="detail ms-3">
                <h3>Money Back</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>

          <div className="right-box col col-md-9 col-12">
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

            <div className="bottom row mt-2 d-flex justify-content-center px-5">
              <div className="box mb-2 col col-12 col-sm-6 col-md-4">
                <h3>Your Account</h3>
                <ul>
                  <li>About</li>
                  <li>Account</li>
                  <li>Payment</li>
                  <li>Sales</li>
                </ul>
              </div>
              <div className="box mb-2 col col-12 col-sm-6 col-md-4">
                <h3>Products</h3>
                <ul>
                  <li>Delivery</li>
                  <li>Track Oder</li>
                  <li>New Product</li>
                  <li>Old Product</li>
                </ul>
              </div>
              <div className="box mb-2 col col-12 col-sm-6 col-md-4">
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
