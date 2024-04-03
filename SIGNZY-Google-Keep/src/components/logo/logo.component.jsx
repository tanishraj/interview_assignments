import React from "react";
import keepLogo from "../../assets/images/logo.png";

import "./logo.style.scss";

const Logo = () => {
  return (
    <a className="logo" href="/">
      <img src={keepLogo} alt="Google Keep Logo" />
      <span className="logo-name">Keep</span>
    </a>
  );
};

export default Logo;
