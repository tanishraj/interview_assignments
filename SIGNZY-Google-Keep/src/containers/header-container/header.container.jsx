import React from "react";
import Logo from "../../components/logo/logo.component";
import Searchbar from "../../components/search-bar/searchbar.component";
import Login from "../../components/login/login.component";

import "./header.style.scss";

function Header() {
  return (
    <div>
      <header className="header-container">
        <Logo />
        <Searchbar />
        <Login />
      </header>
      <div className="spacer"></div>
    </div>
  );
}

export default Header;
