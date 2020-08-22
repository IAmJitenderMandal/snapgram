import React from "react";
import "./postcard.styles.scss";

import { BsHeart, BsChat, BsFillCursorFill } from "react-icons/bs";

export default function PostCard() {
  return (
    <div className="post-card">
      <div className="post-owner">
        <img
          src="https://images.pexels.com/photos/4294972/pexels-photo-4294972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="owner-img"
        />
        <div className="owner-details">
          <div className="name">jack Kalis</div>
          <div className="posted-date">13-Jan-2020</div>
        </div>
      </div>
      <div className="post-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
        exercitationem odit incidunt repellendus, quae aut obcaecati harum
        veritatis? Deleniti veniam assumenda aliquid neque possimus placeat
        exercitationem aut dolor perferendis amet!
      </div>
      <div className="post-img-vid">
        <img
          src="https://images.pexels.com/photos/4931004/pexels-photo-4931004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="post-img"
        />
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
