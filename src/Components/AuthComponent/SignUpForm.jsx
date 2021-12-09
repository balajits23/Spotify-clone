import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../FireBase";
import { toast } from "react-toastify";

const SignUpForm = ({ history }) => {
  console.log();
  let [state, setState] = useState({
    email: "",
    email: "",
    password: "",
    profile_name: "",
    month: "",
    dd: "",
    yyyy: "",
    gender: "",
    checkbox: "",
    loading: false,
  });
  let {
    email,
    email1,
    password,
    profile_name,
    month,
    dd,
    yyyy,
    gender,
    checkbox,
    loading,
  } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log(state);
      setState({ loading: true });
      if (email == email1) {
        let USER_DATA = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        let confirmMessage = `A verification message has been sent to ${email} verify and login`;
        USER_DATA.user.sendEmailVerification();
        toast.info(confirmMessage);
        toast.success("Sucessfully User Registered");
        history.push('/login');
      } else {
        toast.error("confirm email is not matching");
      }
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };
  return (
    <div className="addForm">
      <h2>Sign up with your email address</h2>
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
          <label htmlFor="email1">Confirm your email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your Email again."
            name="email1"
            id="email1"
            value={email1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Create a password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create a password"
            name="password"
            id="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profile_name">What should we call you?</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter a profile name."
            name="profile_name"
            id="profile_name"
            value={profile_name}
            onChange={handleChange}
          />
          {/* <p>This appears on your profile.</p> */}
        </div>

        <div className="form-group">
          <label htmlFor="dob">What's your date of birth?</label>
          <div className="dateBlock">
            {/* <label htmlFor="month">Month</label> */}
            <input
              type="text "
              className="form-control"
              name="month"
              id="month"
              placeholder="Month"
              required
              value={month}
              onChange={handleChange}
            />
            {/* <label htmlFor="day">Day</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="DD"
              maxLength="2"
              required
              name="dd"
              value={dd}
              onChange={handleChange}
            />
            {/* <label htmlFor="year">Year</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="YYYY"
              maxLength="4"
              required
              name="yyyy"
              value={yyyy}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="gender">What's your gender?</label>
          <main className="genderBlock" onChange={handleChange} value={gender}>
            <span>
              <input
                type="radio"
                className="form-control"
                name="gender"
                value="male"
              />
              Male
            </span>
            <span>
              <input
                type="radio"
                className="form-control"
                name="gender"
                value="Female"
              />
              Female
            </span>
            <span>
              <input
                type="radio"
                className="form-control"
                name="gender"
                value="Non-Binary"
              />
              Non-Binary
            </span>
          </main>
        </div>

        <div className="form-group" style={{ paddingRight: "69px" }}>
          <input
            type="checkbox"
            className="form-control"
            name="checkbox"
            id="checkbox"
            value={checkbox}
            onChange={handleChange}
          />
          <span className="checkboxContent">
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </span>
        </div>
        <div className="copyWrite">
          <p>
            By clicking on sign-up, you agree to Spotify's
            <a href="#"> Terms and Conditions of Use.</a>
          </p>
          <br />
          <p>
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see
            <a href="#"> Spotify's Privacy Policy.</a>
          </p>
        </div>
        <div className="btn-group">
          <button>{loading == true ? "Loading" : "Sign up"}</button>
        </div>
        <div className="havingAcc">
          <p>
            Have an account?{" "}
            <Link to="/login" className="login">
              Log in.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUpForm);
