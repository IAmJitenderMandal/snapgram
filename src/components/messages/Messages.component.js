import React from "react";
import { BsSearch, BsFillCursorFill, BsPaperclip } from "react-icons/bs";

import "./messages.styles.scss";

export default function Messages() {
  return (
    <div className="messages">
      <div className="latest-chats">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Friends..."
            className="search-friend"
          />
          <span className="icon">
            <BsSearch />
          </span>
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
          <div className="time">3:00PM</div>
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
          <div className="time">3:00PM</div>
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
          <div className="time">3:00PM</div>
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
          <div className="time">3:00PM</div>
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
          <div className="time">3:00PM</div>
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
          <div className="time">3:00PM</div>
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
          <div className="time">3:00PM</div>
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
          <div className="time">3:00PM</div>
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
          <div className="time">3:00PM</div>
        </div>
      </div>

      <div className="chat">
        <div className="chat-profile">
          <div className="img">
            <img
              src="https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="name-and-msg">
            <span className="name">Jake</span>
            <span className="from">From: Italy</span>
          </div>
        </div>
        <div className="chat-texts">
          <div className="text-0">
            <div className="text-container">
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                debitis.
              </div>
              <div className="time">2:33pm</div>
            </div>
          </div>
          <div className="text-0">
            <div className="text-container">
              <div className="text">Lorem, ipsum dolor.</div>
              <div className="time">2:34pm</div>
            </div>
          </div>
          <div className="text-1">
            <div className="text-container">
              <div className="text">
                Lorem ipsum dolor sit amicing elit. In, debitis.
              </div>
              <div className="time">2:33pm</div>
            </div>
          </div>
          <div className="text-1">
            <div className="text-container">
              <div className="text">Losicing elit. In, debitis. </div>
              <div className="time">2:33pm</div>
            </div>
          </div>
          <div className="text-input">
            <input type="text" />
            <span className="icon">
              <BsPaperclip />
            </span>
            <span className="icon">
              <BsFillCursorFill />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
