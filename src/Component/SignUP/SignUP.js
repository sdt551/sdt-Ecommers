import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.css";
// import firebaseConfig from "../../FirbaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

function SignUP() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  let values, names;
  const data = (e) => {
    values = e.target.value;
    names = e.target.name;
    setUser({ ...user, [names]: values });
  };
  const { firstName, lastName, email, password } = user;
  const handleSubmit = () => {
    if (!firstName && !lastName && !email && !password) {
      setErr("Fail the all Details !");
    } else if (!firstName) {
      setErr("Enter your first name !");
    } else if (!lastName) {
      setErr("Enter your last name !");
    } else if (!email) {
      setErr("Enter your emai !");
    } else if (!password) {
      setErr("Enter your password !");
    } else if (password.length < 7) {
      setErr("Password need minimum 8 charecter !");
    } else {
      createUserWithEmailAndPassword(auth, firstName, email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: firstName,
            photoURL: "",
          }).then(() => {
            setErr("");
            navigate("/");
          });
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/invalid-email") {
            setErr("Email already used");
          }
        });
    }
  };

  return (
    <div className="Signup container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-7 mx-auto">
          <div className="card m-2">
            <div className="card-header bg-info text-center">
              <h4 className="p-2">Create Account</h4>
            </div>
            <div className="card-body bg-light text-dark rounded-bottom">
              <div className="form row p-2">
                <div className="col-md-6">
                  <div className="form-group m-2">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="form-control border-dark p-1"
                      value={user.firstName}
                      onChange={data}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group m-2">
                    <label htmlFor="">Last Name</label>
                    <input
                      className="form-control border-dark p-1"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={user.lastName}
                      onChange={data}
                    />
                  </div>
                </div>

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

                <div className="col-md-12">
                  <div className="form-group m-2 text-danger">
                    <h5>{err}</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group m-2">
                    <h5>
                      You have already account ?
                      <NavLink
                        to="/signin"
                        className="h5 text-primary"
                        style={{ textDecoration: "none" }}
                      >
                        <span> </span>
                        SignIn
                      </NavLink>
                    </h5>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group text-end m-2">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-primary px-3 py-1"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <h3>Create a Account</h3>
        <form action="">
          <input type="text" placeholder="FirstName" name="" id="" />
          <input type="text" placeholder="LastName" name="" id="" />
          <input type="email" placeholder="Your Email" name="" id="" />
          <input type="password" placeholder="Password" name="" id="" />
          <button>SignUp</button>
        </form> */}
      </div>
    </div>
  );
}

export default SignUP;
