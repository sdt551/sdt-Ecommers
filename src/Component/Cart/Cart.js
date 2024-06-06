import "./Cart.css";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { Bounce, ToastContainer, toast } from "react-toastify";

function Cart({ cart, setCart, totalBal, userDetails }) {
  // increase Quantity of cart product
  const incQty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };
  // decrease Quantity of cart product
  const decQty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };
  // remove Product
  const removeProduct = (product) => {
    setCart(
      cart.filter((x) => {
        return x.id !== product.id;
      })
    );
  };

  const handelCheckOut = (total) => {
    if (!userDetails) {
      toast.error("Please login your account!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    totalBal(total);
  };

  // total price
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <div className="cart container-fluid">
      <ToastContainer />
      <div className="row mx-3">
        {cart.length === 0 && (
          <>
            <div
              className="empty-cart text-center my-2 d-flex flex-column align-items-center justify-content-center"
              style={{ height: "28vh" }}
            >
              <h2>Your Shopping cart is empty</h2>
              <NavLink
                to="/shop"
                className="btn btn-warning px-3 py-1 mt-2 rounded"
              >
                Shop Now
              </NavLink>
            </div>
          </>
        )}
      </div>

      <div className="row mx-3">
        {cart.map((curElm, index) => {
          return (
            <div className="box card p-3 bg-info my-2 w-100" key={index}>
              <div className="d-flex justify-content-between">
                <div className="product-detail d-flex">
                  <div className="img-box">
                    <img className="rounded" src={curElm.img} alt="" />
                  </div>

                  <div className="detail ms-3">
                    <h3 className="text-uppercase">{curElm.name}</h3>
                    <p>Price: ${curElm.price}</p>
                    <p>Total: ${curElm.price * curElm.qty}</p>
                  </div>
                </div>
                <button
                  className="btn btn-danger"
                  style={{ width: "35px", height: "35px" }}
                >
                  <AiOutlineClose
                    onClick={() => removeProduct(curElm)}
                    className="h3"
                  />
                </button>
              </div>

              <div className="quantity input-group mt-3">
                <button
                  className="btn btn-warning px-2"
                  onClick={() => decQty(curElm)}
                >
                  -
                </button>
                <input
                  className="form-control"
                  type="number"
                  value={curElm.qty}
                  name=""
                  id=""
                  onChange={(e) => e.preventDefault()}
                />
                <button
                  className="btn btn-warning px-2"
                  onClick={() => incQty(curElm)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="row mx-3 justify-content-center">
        <div className=" col-10 col-sm-6 col-md-4 mt-2">
          {cart.length > 0 && (
            <>
              <div className="card total p-2">
                <div className="card-header">
                  <h4 className="text-uppercase text-danger py-2">
                    sub total <span className="float-end h4">${total}</span>
                  </h4>
                </div>
                <NavLink
                  to={userDetails ? "/checkout" : "/signup"}
                  className="btn btn-primary px-3 py-1"
                  onClick={() => handelCheckOut(total)}
                >
                  Checkout
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
