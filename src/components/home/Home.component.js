import React, { useContext } from "react";
import "./home.styles.scss";

// react router
import { Route, Switch, Redirect } from "react-router-dom";

import AppContext from "../../context/appContext";

// custom components
import PostCard from "../post-card/PostCard.component";
import ChatWindow from "../chat-window/ChatWindow.component";
import Navigation from "../navigation/Navigation.component";
import SidePanel from "../side-panel/SidePanel.component";
import ProfilePage from "../profile-page/ProfilePage.component";
import FriendsPage from "../friends-page/FriendsPage.component";
import Messages from "../messages/Messages.component";
import Live from "../live-page/Live.component";

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
import CreatePost from "../create-post/CreatePost.component";
import { ALL_POSTS } from "../../context/action.types";

// Get a reference to the database service
var database = firebase.database();
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

export default function Home() {
  let [state, dispatch] = useContext(AppContext);

  // if (state.userId === null) {
  //   return <Redirect to="/" />;
  // }

  // database.ref("/posts").on("value", function (snapshot) {
  //   dispatch({
  //     type: ALL_POSTS,
  //     payload: snapshot.val(),
  //   });
  // });

  return (
    <div className="home">
      <Navigation />
      <div className="content">
        <SidePanel />
        <div className="centeral">
          <CreatePost />
          {/* {state.all_post.map((post) => console.log(post))} */}
        </div>
        <ChatWindow />
      </div>
    </div>
  );
}
