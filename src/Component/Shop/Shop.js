import React from "react";
import "./Shop.css";
import { Image } from "react-bootstrap";
import { AiFillEye, AiFillHeart } from "react-icons/ai";

function Shop({ shop, handleClick, allCategory, addToCart }) {
  return (
    <>
      <div className="cotainer-fluid w-100 p-3">
        <div className="row text-uppercase">
          <h2># Shop</h2>
          <p>Home . shop</p>
        </div>
        <div className="row justify-content-around">
          <div className="left-box col col-12 col-md-3 my-3">
            <div className="category text-uppercase">
              <div className="header">
                <h2>All category</h2>
              </div>
              <div className="box">
                <ul className="ms-4 mt-2">
                  <li onClick={() => allCategory("all")}># All</li>
                  <li onClick={() => handleClick("camera")}># camera</li>
                  <li onClick={() => handleClick("metter")}># metter</li>
                  <li onClick={() => handleClick("laptop")}># laptop</li>
                  <li onClick={() => handleClick("printer")}># printer</li>
                  <li onClick={() => handleClick("shirt")}># t-shirt</li>
                  <li onClick={() => handleClick("desktop")}># desktop</li>
                  <li onClick={() => handleClick("watch")}># watch</li>
                  <li onClick={() => handleClick("holder")}># holder</li>
                  <li onClick={() => handleClick("headphone")}># headphone</li>
                  <li onClick={() => handleClick("pen")}># pen</li>
                  <li onClick={() => handleClick("note")}># note</li>
                  <li onClick={() => handleClick("calculator")}>
                    # calculator
                  </li>
                  <li onClick={() => handleClick("umbrella")}># umbrella</li>
                </ul>
              </div>
            </div>
            <div className="banner w-100">
              <div className="img-box mx-auto">
                <Image
                  className="rounded w-100 mt-3"
                  src="img/add.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="right-box col col-12 col-md-8">
            <div className="banner">
              <div className="img-box">
                <Image
                  className="w-100 rounded"
                  src="img/b2.jpeg"
                  alt=""
                  style={{ height: "200px" }}
                />
              </div>
            </div>
            <div className="product-box my-2">
              <h2 className="mt-3 text-center text-uppercase">Shop Product</h2>
              <div className="product-container row justify-content-center">
                {shop.map((curElm, index) => {
                  return (
                    <div key={index} className="col col-sm-4 col-md-3 col-6">
                      <div className=" border border-warning m-2 p-1">
                        <div className="box d-flex w-50 mx-auto my-3">
                          <img
                            className="w-100 rounded"
                            src={curElm.img}
                            alt=""
                          />
                          <div className="icon">
                            <AiFillHeart className="h6 my-1" />
                            <AiFillEye className="h6 my-1" />
                          </div>
                        </div>
                        <div className="detail text-center text-uppercase">
                          <h3>{curElm.name}</h3>
                          <p className="text-danger my-1">{curElm.price}</p>
                          <button
                            onClick={() => addToCart(curElm)}
                            className="btn text-uppercase py-1 px-2"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
