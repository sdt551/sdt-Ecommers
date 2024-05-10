import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SignIN() {
  const [user, setUser] = useState({
    email: "",
    passowrd: "",
  });

  let values, names;
  const data = (e) => {
    values = e.target.value;
    names = e.target.name;
    setUser({ ...user, [names]: values });
  };
  return (
    <div className="Signup container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-7 mx-auto">
          <div className="card m-2">
            <div className="card-header bg-info text-center">
              <h4 className="p-2">Log In Account</h4>
            </div>
            <div className="card-body bg-light text-dark rounded-bottom">
              <div className="form row p-2">
                <div className="col-md-6">
                  <div className="form-group m-2">
                    <label htmlFor="">Email Address</label>
                    <input
                      className="form-control border-dark p-1"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={user.email}
                      onChange={data}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group m-2">
                    <label htmlFor="">passowrd</label>
                    <input
                      className="form-control border-dark p-1"
                      type="password"
                      name="passowrd"
                      placeholder="password"
                      onChange={data}
                      value={user.passowrd}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group m-2 text-danger">
                    <h5>err</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group m-2">
                    <h5>
                      <NavLink
                        to="/signin"
                        className="h5 text-primary"
                        style={{ textDecoration: "none" }}
                      >
                        <span> </span>
                        Create your Account
                      </NavLink>
                    </h5>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group text-end m-2">
                    <button className="btn btn-primary px-3 py-1">
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIN;
