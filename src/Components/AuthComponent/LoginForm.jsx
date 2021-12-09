import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "./../../FireBase";

const LoginForm = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });
  let { email, password, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      //   console.log(state);
      setState({ loading: true });
      let userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (userData.user.emailVerified === true) {
        // console.log(userData);
        toast.success(`Successfully ${email} logged in`);
        history.push("/");
      } else {
        history.push("./login");
        toast.error(`email not verified goto ${email} verify then login`);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: true });
  };
  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">What's your email?</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email."
            name="email"
            id="email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleChange}
            value={password}
          />
        </div>

        <div className="form-group" style={{ paddingRight: "69px" }}>
          <input
            type="checkbox"
            className="form-control"
            name="checkbox"
            id="checkbox"
            // value={checkbox}
            // onChange={handleChange}
          />
          <span className="checkboxContent">
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </span>
        </div>

        <div className="form-group btn-group">
          <button>{loading == true ? "Loading" : "Log In"}</button>
        </div>

        <div className="form-group">
          <p className="acc">
            Have an account?
            <Link to="/signup" style={{ color: "#1ed760" }}>
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
