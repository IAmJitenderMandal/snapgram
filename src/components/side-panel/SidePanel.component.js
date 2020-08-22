import React from "react";
import "./side-panel.styles.scss";

import { BsSearch } from "react-icons/bs";

export default function SidePanel() {
  return (
    <div className="side-panel">
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
    </div>
  );
}
