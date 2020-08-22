import React from "react";
import "./profile-page.styles.scss";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-img">
        <img
          src="https://images.pexels.com/photos/4810369/pexels-photo-4810369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div className="name">
        <input className="common-form-el" type="text" placeholder="Joe Doe" />
      </div>
      <div className="password">
        <input
          className="common-form-el"
          type="password"
          placeholder="***************"
        />
      </div>
      <div className="username-email">
        <input
          className="common-form-el"
          type="text"
          placeholder="joneDoe@gmail.com"
        />
      </div>
      <div className="phone">
        <input
          className="common-form-el"
          type="text"
          placeholder="+9 847362626"
        />
      </div>
      <div className="city">
        <input className="common-form-el" type="text" placeholder="berlin" />
      </div>
      <div className="state">
        <input
          className="common-form-el"
          type="text"
          placeholder="California"
        />
      </div>
      <div className="gender">
        <select className="common-form-el">
          <option value="m">male</option>
          <option value="f">female</option>
        </select>
      </div>
      <button className="update-btn">Update</button>
    </div>
  );
}
