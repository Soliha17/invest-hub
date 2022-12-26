import React from "react";

import "./style.scss";

import menuIcon from "../../assets/icons/menu-icon.svg";
import investLogo from "../../assets/images/invest-hub-logo.svg";

function Navbar() {
  return (
    <header className="header">
      <span>
        <img src={menuIcon} alt="menu-icon" />
        <img src={investLogo} alt="invest hub logo" />
      </span>
      <span>
        <img src="" alt="" />
      </span>
      <span>
        <div class="dropdown">
          <button>HubSpot Resources</button>
          <div class="dropdown-content">
            <a href="https://blog.hubspot.com/">Blog</a>
            <a href="https://academy.hubspot.com/">Academy</a>
            <a href="https://www.youtube.com/user/hubspot">YouTube</a>
          </div>
        </div>
      </span>
    </header>
  );
}

export default Navbar;
