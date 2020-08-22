import React, { useState, useContext } from "react";
import "./sign-up.styles.scss";

import Logo from "../logo/Logo.component";

import AppContext from "../../context/appContext";
import { LOGED_IN } from "../../context/action.types";

// react router
import { Route, Redirect, useHistory } from "react-router-dom";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// firebase core
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// Get a reference to the database service
var database = firebase.database();

export default function SignUp() {
  let [state, dispatch] = useContext(AppContext);
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  function writeUserData(userId, name = "", email, imageUrl = "") {
    database.ref("users/" + userId).set({
      username: name,
      email: email,
      profile_picture: imageUrl,
    });
  }

  function handleChange(e) {
    if (e.target.id === "full-name") {
      setFullName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "confirm-password") {
      setConfirmPassword(e.target.value);
    }
  }

  function handleCreateAccount() {
    if (password === confirmPassword) {
      let auth = firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          dispatch({
            type: LOGED_IN,
            payload: {
              userEmail: res.user.email,
              userId: res.user.uid,
            },
          });
          writeUserData(res.user.uid, fullName, res.user.email);
        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorMessage, "error code is", errorCode);
        });
    } else {
      console.log("wrong password");
    }
  }

  if (state.userId) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="sign-up">
      <Logo />

      <div className="container">
        <div className="sign-up-form">
          <div className="form">
            <input
              required
              type="text"
              placeholder="Full Name"
              className="full-name"
              id="full-name"
              onChange={handleChange}
            />

            <input
              required
              type="text"
              placeholder="email"
              className="email"
              id="email"
              onChange={handleChange}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="password"
              id="password"
              onChange={handleChange}
            />

            <input
              required
              type="password"
              className="confirm-password"
              id="confirm-password"
              placeholder="Confirm-Password"
              onChange={handleChange}
            />
          </div>
          <button className="create-account-btn" onClick={handleCreateAccount}>
            Create Account
          </button>
        </div>
        <div className="seprator">
          <span className="text">Or</span>
        </div>
        <div className="facebook-signup">
          <a href="#">sign up with Facebook</a>
        </div>
      </div>
    </div>
  );
}
