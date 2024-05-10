import React from "react";
import "./CheckOut.css";

function CheckOut({ chekOutTotalBal, cart }) {
  console.log(cart);
  return (
    <div className="container-fluid Check-out">
      <div className="row p-3 d-flex justify-content-center">
        <div className="col-12 col-sm-6 col-md-7">
          <div className="card m-2">
            <div className="card-header bg-info">
              <h4 className="p-2">Basic Information</h4>
            </div>
            <div className="card-body bg-light text-dark rounded-bottom">
              <div className="form row p-2">
                <div className="col-md-6">
                  <div className="form-group m-2">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control border-dark p-1"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group m-2">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control border-dark p-1"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group m-2">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="number"
                      name="phoneNumber"
                      className="form-control border-dark p-1"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group m-2">
                    <label htmlFor="">Email Address</label>
                    <input
                      type="email"
                      name="emailAddress"
                      className="form-control border-dark p-1"
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group m-2">
                    <label htmlFor="">Full Address</label>
                    <textarea
                      rows="3"
                      className="form-control border-dark p-1"
                      id=""
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group m-2">
                    <label htmlFor="">City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control border-dark p-1"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group m-2">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      name="state"
                      className="form-control border-dark p-1"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group m-2">
                    <label htmlFor="">Zip Code</label>
                    <input
                      type="zipCode"
                      name="city"
                      className="form-control border-dark p-1"
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group text-end m-2">
                    <button className="btn btn-primary px-3 py-1">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-5">
          <div className="m-2">
            <table className="table table-bordered table-warning text-center text-uppercase table-hover">
              <thead>
                <tr>
                  <th width="50%">Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart &&
                  cart.map((curElm, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-start">{curElm.name}</td>
                        <td>{curElm.price}</td>
                        <td>{curElm.qty}</td>
                        <td>{curElm.price * curElm.qty}</td>
                      </tr>
                    );
                  })}
                <tr className="text-center table-danger">
                  <td colSpan="2">Grand Total</td>
                  <td colSpan="2">{chekOutTotalBal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
