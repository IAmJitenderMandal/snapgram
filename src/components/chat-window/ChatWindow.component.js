import React from "react";
import "./chatWindow.styles.scss";

import { BsXCircle } from "react-icons/bs";

export default function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="cross-icon">
        <BsXCircle />
      </div>
      <div className="title">
        <span>Messages</span>
      </div>

      <div className="message">
        <img
          src="https://images.pexels.com/photos/4294972/pexels-photo-4294972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="chat-img"
        />
        <div className="name-and-msg">
          <span className="name">Jake</span>
          <span className="msg">hi how are you?</span>
        </div>
      </div>
      <div className="message">
        <img
          src="https://images.pexels.com/photos/4294972/pexels-photo-4294972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="chat-img"
        />
        <div className="name-and-msg">
          <span className="name">Jake</span>
          <span className="msg">hi how are you?</span>
        </div>
      </div>
      <div className="message">
        <img
          src="https://images.pexels.com/photos/4294972/pexels-photo-4294972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="chat-img"
        />
        <div className="name-and-msg">
          <span className="name">Jake</span>
          <span className="msg">hi how are you?</span>
        </div>
      </div>
      <div className="message">
        <img
          src="https://images.pexels.com/photos/4294972/pexels-photo-4294972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="chat-img"
        />
        <div className="name-and-msg">
          <span className="name">Jake</span>
          <span className="msg">hi how are you?</span>
        </div>
      </div>
      <div className="message">
        <img
          src="https://images.pexels.com/photos/4294972/pexels-photo-4294972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="chat-img"
        />
        <div className="name-and-msg">
          <span className="name">Jake</span>
          <span className="msg">hi how are you?</span>
        </div>
      </div>
      <div className="message">
        <img
          src="https://images.pexels.com/photos/4294972/pexels-photo-4294972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="chat-img"
        />
        <div className="name-and-msg">
          <span className="name">Jake</span>
          <span className="msg">hi how are you?</span>
        </div>
      </div>

      <div className="see-all-msgs">
        <a href="#">See All</a>
      </div>
    </div>
  );
}
