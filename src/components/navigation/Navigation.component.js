import React from "react";
import "./navigation.styles.scss";

import Logo from "../logo/Logo.component";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">
        <Logo />
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Friends</a>
          </li>
          <li>
            <a href="#">Live</a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
        </ul>
      </div>
      <div className="profile-img-part">
        <img
          src="https://images.pexels.com/photos/1719344/pexels-photo-1719344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="profile-img"
          className="profile-img"
        />
        <span className="icon">
          <BsThreeDotsVertical />{" "}
        </span>
      </div>
    </div>
  );
}
