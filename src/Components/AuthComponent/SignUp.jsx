import React from "react";
import Logo from "../../Pages/HeaderComponent/Logo";
import "./Auth.css";
import SignUpForm from "./SignUpForm";
import firebase from "../../FireBase";

const SignUp = () => {
  
  return (
    <section id="signupBlock">
      <article>
        <Logo />
        <div className="signupContent">
          <h1>Sign up for free to start listening.</h1>
          <a href="#">
            <button>Sign Up with Facebook</button>
          </a>
          <p className="orBlock">
            <strong>or</strong>
          </p>
        </div>
        <div className="form-content">
          <SignUpForm />
        </div>
      </article>
    </section>
  );
};

export default SignUp;
