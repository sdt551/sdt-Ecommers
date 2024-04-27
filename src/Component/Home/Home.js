import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import { HomeProduct } from "./HomeProduct";
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

function Home() {
  const [newProduct, setNewProduct] = useState("");
  const [newFeatured, setFeatured] = useState("");
  const [newTop, setTop] = useState("");
  // const [newTop, setTop] = useState("");

  const [trendingProduct, settrendingProduct] = useState(HomeProduct);

  const filterCate = (x) => {
    const filterCate = HomeProduct.filter((curElm) => {
      return curElm.type === x;
    });
    settrendingProduct(filterCate);
  };

  useEffect(() => {
    productCategory();
  }, []);
  const productCategory = () => {
    const newCategory = HomeProduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newCategory);

    const featuredCategory = HomeProduct.filter((x) => {
      return x.type === "featured";
    });
    setFeatured(featuredCategory);

    const topCategory = HomeProduct.filter((x) => {
      return x.type === "top";
    });
    setTop(topCategory);
  };
  return (
    <>
      <div className="container-fluid home w-100">
        <div className="top-baner">
          <div className="content text-light pt-5 ps-5">
            <h4>Silver alumium</h4>
            <h1>Apple watch</h1>
            <p className="my-3">30% off at your first odder</p>
            <Link className="link nav-link btn w-25 py-2" to="/shop">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="trending container-fluid w-100">
          <div className="contain row py-3">
            <div className="left-box col col-md-9 col-12">
              <div className="row header justify-content-around px-2">
                <div className="heading col col-md-7 col-sm-12 col-12 text-uppercase">
                  <h3>Trending Product</h3>
                </div>

                <div className="col col-md-5 col-sm-12 col-12 cate">
                  <div className="d-flex justify-content-end">
                    <h4
                      onClick={() => filterCate("new")}
                      className="p-2 border border-danger"
                    >
                      New
                    </h4>
                    <h4
                      onClick={() => filterCate("featured")}
                      className="p-2 border border-danger"
                    >
                      Featured
                    </h4>
                    <h4
                      onClick={() => filterCate("top")}
                      className="p-2 border border-danger"
                    >
                      Top Selling
                    </h4>
                  </div>
                </div>
              </div>

              <div className="products w-100 py-2 d-flex flex-column justify-content-center">
                <div className="row contain w-100 justify-content-center">
                  {trendingProduct.map((curElm, index) => {
                    return (
                      <div
                        key={index}
                        className="box col col-12 col-sm-6 col-md-4 col-lg-3 p-2"
                      >
                        <div className="img-box d-flex ">
                          <img className="rounded" src={curElm.img} alt="" />
                          <div className="icon">
                            <div className="icon-box">
                              <AiFillEye />
                            </div>
                            <div className="icon-box">
                              <AiFillHeart className="text-danger" />
                            </div>
                          </div>
                        </div>
                        <div className="info">
                          <h3 className="text-uppercase text-info">
                            {curElm.name}
                          </h3>
                          <p className="text-warning my-1 ">${curElm.price}</p>
                          <button className="btn btn-success py-1 px-2">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <NavLink
                  to="/shop"
                  className="btn btn-danger py-1 px-3 mx-auto my-2"
                >
                  Show More
                </NavLink>
              </div>
            </div>
            <div className="right-box col col-md-3 col-12 d-flex justify-content-center ">
              <div className="container text-center">
                <div className="testimonial">
                  <h2>Our Testimonial</h2>
                </div>
                <div className="detail">
                  <div className="img-box px-2">
                    <img className="w-50 pt-2" src="img/add.jpg" alt="" />
                  </div>
                  <div className="info px-4 pt-2">
                    <h3>Stephan Robot</h3>
                    <h4 className="py-1 text-danger">Web Developer</h4>
                    <p className="h6">
                      Dus faucibus enm vitae nunc moiestie. nec facilisis arcu
                      pulvinar nullam mattisr nullam mattis
                    </p>
                  </div>
                </div>
                <div className="newsltter px-4 pt-4">
                  <div className="head">
                    <h2>Newsletter</h2>
                  </div>
                  <div className="form">
                    <p>Join our mailling list</p>
                    <form
                      className="d-flex flex-column justify-content-center"
                      action=""
                    >
                      <input
                        className="d-block my-2 p-1"
                        type="email"
                        placeholder="E-mail"
                      />
                      <button className="btn btn-success px-3 py-1">
                        Sbuscribe
                      </button>
                    </form>
                    <div className="icon-box d-flex justify-content-between mt-3 text-danger">
                      <div className="icon p-1">
                        <BiLogoFacebook className="h2" />
                      </div>
                      <div className="icon p-1">
                        <BiLogoTwitter className="h2" />
                      </div>
                      <div className="icon p-1">
                        <BiLogoInstagram className="h2" />
                      </div>
                      <div className="icon p-1">
                        <BiLogoYoutube className="h2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banners container-fluid w-100">
          <div className="box w-100 py-3">
            <img className="w-100" src="img/b2.jpeg" alt="" />
          </div>
        </div>

        <div className="product-type container-fluid w-100">
          <div className="row w-100 px-2 py-3 justify-content-center ">
            <div className="col col-12 col-sm-6 col-md-4 mb-2">
              <div className="card bg-dark mx-1">
                <div className="header text-center py-3 text-light">
                  <h2 className="border-bottom pb-2 mx-3 text-uppercase">
                    New Product
                  </h2>
                </div>
                {newProduct &&
                  newProduct.map((curElm, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex justify-content-center text-light py-2 border border-info my-2"
                      >
                        <div
                          className="img-box w-50 mb-3"
                          style={{ height: "100px" }}
                        >
                          <img
                            className="w-100 h-100 rounded"
                            src={curElm.img}
                            alt=""
                          />
                        </div>

                        <div className="details ms-3">
                          <h3 className="text-uppercase">{curElm.name}</h3>
                          <div>
                            <p className="text-danger py-1 h5">
                              ${curElm.price}
                            </p>

                            <div className="icon d-flex justify-content-between align-items-center">
                              <div className="icon-box">
                                <AiFillEye />
                              </div>
                              <div className="icon-box">
                                <AiFillHeart className="text-danger" />
                              </div>
                              <button className="btn mx-1">
                                <AiOutlineShoppingCart className=" icon text-danger mx-1 h5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="col col-12 col-sm-6 col-md-4 mb-2">
              <div className="card bg-dark mx-1">
                <div className="header text-center py-3 text-light">
                  <h2 className="border-bottom pb-2 mx-3 text-uppercase">
                    Featured Product
                  </h2>
                </div>
                {newFeatured &&
                  newFeatured.map((curElm, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex justify-content-center text-light py-2 border border-info my-2"
                      >
                        <div
                          className="img-box w-50 mb-3"
                          style={{ height: "100px" }}
                        >
                          <img
                            className="w-100 h-100 rounded"
                            src={curElm.img}
                            alt=""
                          />
                        </div>

                        <div className="details ms-3">
                          <h3 className="text-uppercase">{curElm.name}</h3>
                          <div>
                            <p className="text-danger py-1 h5">
                              ${curElm.price}
                            </p>

                            <div className="icon d-flex justify-content-between align-items-center">
                              <div className="icon-box">
                                <AiFillEye />
                              </div>
                              <div className="icon-box">
                                <AiFillHeart className="text-danger" />
                              </div>
                              <button className="btn mx-1">
                                <AiOutlineShoppingCart className=" icon text-danger mx-1 h5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="col col-12 col-sm-6 col-md-4 mb-2">
              <div className="card bg-dark mx-1">
                <div className="header text-center py-3 text-light">
                  <h2 className="border-bottom pb-2 text-uppercase">
                    Top Product
                  </h2>
                </div>
                {newTop &&
                  newTop.map((curElm, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex justify-content-center text-light pb-2 py-2 border border-info my-2"
                      >
                        <div
                          className="img-box w-50 mb-3"
                          style={{ height: "100px" }}
                        >
                          <img
                            className="w-100 h-100 rounded"
                            src={curElm.img}
                            alt=""
                          />
                        </div>

                        <div className="details ms-3">
                          <h3 className="text-uppercase">{curElm.name}</h3>
                          <div>
                            <p className="text-danger py-1 h5">
                              ${curElm.price}
                            </p>

                            <div className="icon d-flex justify-content-between align-items-center">
                              <div className="icon-box">
                                <AiFillEye />
                              </div>
                              <div className="icon-box">
                                <AiFillHeart className="text-danger" />
                              </div>
                              <button className="btn mx-1">
                                <AiOutlineShoppingCart className=" icon text-danger mx-1 h5" />
                              </button>
                            </div>
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

export default Home;
