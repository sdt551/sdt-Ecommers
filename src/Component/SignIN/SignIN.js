import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../FirbaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIN() {
  const navigat = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let values, names;
  const data = (e) => {
    values = e.target.value;
    names = e.target.name;
    setUser({ ...user, [names]: values });
  };
  const { email, password } = user;
  const handleLoedgIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in Successful", {
        position: "top-center",
      });
      navigat("/");
    } catch (error) {
      if (error) {
        toast.success("Invalid your Document", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div className="Signup container-fluid">
      <ToastContainer />
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
                    <label htmlFor="">password</label>
                    <input
                      className="form-control border-dark p-1"
                      type="password"
                      name="password"
                      placeholder="password"
                      onChange={data}
                      value={user.password}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group m-2">
                    <h5>
                      <NavLink
                        to="/signup"
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
                    <button
                      onClick={handleLoedgIn}
                      className="btn btn-primary px-3 py-1"
                    >
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
