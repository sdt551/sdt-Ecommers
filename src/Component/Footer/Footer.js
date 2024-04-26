import React from "react";
import "./Footer.css";
import Logo from "../Nav/Img/logo.png";

import {
  FaHeadphonesAlt,
  FaPiggyBank,
  FaShippingFast,
  FaWallet,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer container-fluid">
        <div className="row py-3 px-2">
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
            <div className="text-center">
              <div
                className="header d-flex justify-content-center align-items-center mb-3"
                style={{ cursor: "pointer" }}
              >
                <img src={Logo} alt="" />
                <h4>shahadat</h4>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis distinctio ducimus animi quisquam ab. Aliquid!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
