import React, { useState, useContext } from "react";
import "./create-post.styles.scss";

import AppContext from "../../context/appContext";

import { BsPaperclip } from "react-icons/bs";
import { v4 as uuid } from "uuid";

// firebase core library
import * as firebase from "firebase/app";
// firebase realtime database
import "firebase/database";
import "firebase/storage";

// Get a reference to the database service
var database = firebase.database();

export default function CreatePost() {
  let [description, setDescription] = useState("");
  let [file, setFile] = useState("");
  let [state] = useContext(AppContext);

  function setPostData(postId, postOwnerId, description, fileUrl = "") {
    database.ref(`/posts/${postId}`).set({
      postId: postId,
      ownerId: postOwnerId,
      description: description,
      fileUrl: fileUrl,
    });
  }

  // create post, with all the data provided at the time of posting any post
  function createPost(postId, postOwnerId, description) {
    if (file) {
      console.log("file has something");
      firebase
        .storage()
        .ref(`posts/${postId}`)
        .put(file)
        .then((snapshot) => {
          console.log("file uploaded");
          snapshot.ref.getDownloadURL().then(function (fileUrl) {
            setPostData(postId, postOwnerId, description, fileUrl);
            setDescription("");
            setFile("");
          });
        });
    } else {
      setPostData(postId, postOwnerId, description);
      console.log("data uploaded");
    }
  }

  // getting file from local storage
  function getFile(e) {
    setFile(e.target.files[0]);
  }

  return (
    <div className="create-post">
      <textarea
        placeholder="write something"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="action-btns">
        <button
          className="common"
          onClick={() => createPost(uuid(), state.userId, description)}
        >
          Post
        </button>
        <button className="common">Live</button>
        <input
          type="file"
          className="custom-file-input"
          id="post-file"
          onChange={getFile}
          multiple
        />
      </div>
    </div>
  );
}
