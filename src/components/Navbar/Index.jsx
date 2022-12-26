import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import menuIcon from "../../assets/icons/menu-icon.svg";
import dropdownIcon from "../../assets/icons/dropdown-icon.svg";
import plusIcon from "../../assets/icons/plus-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import investLogo from "../../assets/images/invest-hub-logo.svg";

function Navbar() {
  return (
    <header className="header wrapper flex">
      <span className="header__logo-group flex">
        <button className="menu-btn">
          <img src={menuIcon} alt="menu-icon" />
        </button>
        <img src={investLogo} alt="invest hub logo" />
      </span>
      <span className="header__input-group flex">
        <img src={searchIcon} alt="" />
        <input type="text" className="f-1619" placeholder="Izlash..." />
      </span>
      <span className="header__action flex">
        <button className="add-btn flex f-1619">
          Joylashtirish
          <img src={plusIcon} alt="" />
        </button>
        <span class="dropdown__header">
          <button className="flex f-1619">
            O‘zbekcha
            <img src={dropdownIcon} alt="dropdown icon" />
          </button>
          <span class="dropdown-content">
            <Link to="">Ruscha</Link>
            <Link to="">Inglizcha</Link>
          </span>
        </span>
        <button className="login-btn flex f-1619">
          <img src={userIcon} alt="user icon" />
          Kirish
        </button>
      </span>
    </header>
  );
}

export default Navbar;
