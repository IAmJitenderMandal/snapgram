import React, { useContext, useState } from "react";
import "./sign-in.styles.scss";

import Logo from "../logo/Logo.component";
import { Link, Redirect } from "react-router-dom";

import AppContext from "../../context/appContext";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// firebase config object
import config from "../../config/firebase/firebase.config";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

// firebase ui library
import firebaseUI from "firebaseui";
import { LOGED_IN } from "../../context/action.types";

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

export default function SignIn() {
  let [state, dispatch] = useContext(AppContext);
  let { userId } = state;
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleChange(e) {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  }

  const signin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        (res) =>
          dispatch({
            type: LOGED_IN,
            payload: {
              userEmail: res.user.email,
              userId: res.user.uid,
            },
          })
        // toast("loged In successfully")
      )
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  if (userId) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="sign-in">
      <Logo />
      <div className="container">
        <div className="sign-in-form">
          <div className="form">
            <input
              type="text"
              placeholder="Username or Phone"
              className="username"
              id="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <a href="#" className="submit-btn" onClick={signin}>
            Log In
          </a>
          <a href="#" className="forgot-pass-link">
            Forgot password
          </a>
          <div className="facebook-login">
            <a href="#">Log in with Facebook</a>
          </div>
        </div>
        <div className="seprator">
          <span className="text">Or</span>
        </div>
        <div className="create-account-btn">
          <Link to="/sign_up" onClick={signin}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
