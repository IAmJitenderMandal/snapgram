import React from "react";
import "./postcard.styles.scss";

import { BsHeart, BsChat, BsFillCursorFill } from "react-icons/bs";

export default function PostCard({ description, image }) {
  return (
    <div className="post-card">
      <div className="post-owner">
        <img
          src={
            "https://images.pexels.com/photos/4931004/pexels-photo-4931004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          alt="image"
          className="owner-img"
        />
        <div className="owner-details">
          <div className="name">jack Kalis</div>
          <div className="posted-date">13-Jan-2020</div>
        </div>
      </div>
      <div className="post-description">{description}</div>
      <div className="post-img-vid">
        <img src={image} alt="" className="post-img" />
      </div>
      <div className="post-intractivity">
        <div className="like-and-comment">
          <span className="likes">
            <BsHeart className="icon" /> 29
          </span>
          <span className="comments">
            <BsChat className="icon" /> 23
          </span>
        </div>
        <div className="make-comment">
          <input type="text" placeholder="write about post...." />{" "}
          <span className="icon">
            <BsFillCursorFill />
          </span>
        </div>
      </div>
    </div>
  );
}
