import React from "react";
import "./create-post.styles.scss";

import { BsPaperclip } from "react-icons/bs";

// firebase core library
import * as firebase from "firebase/app";
// firebase realtime database
import "firebase/database";
// Get a reference to the database service
var database = firebase.database();

export default function CreatePost() {
  function writeUserData(name, postMsg, imageUrl, postId) {
    firebase.database().ref("");
  }

  return (
    <div className="create-post">
      <textarea placeholder="write something"></textarea>
      <div className="action-btns">
        <button className="common">Post</button>
        <button className="common">Live</button>
        <BsPaperclip className="attachment" />
      </div>
    </div>
  );
}
