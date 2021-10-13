import React from "react";
import { ReactComponent as Logo } from "../img/logoTransparent.svg";

function NavBar() {
  const onHandleClickHome = () => {
    document.location.href = "/";
  };
  const onHandleClick = () => {
    document.location.href = "/signup";
  };
  const onHandleClickProfile = () => {
    document.location.href = "/profile";
  };
  return (
    <div className="Navbar-navbar">
      <Logo className="Navbar-logo" width="200" />
      <ul>
        <li onClick={onHandleClickProfile}>Profile</li>
        <li onClick={onHandleClick}>Sign Up</li>
        <li onClick={onHandleClickHome}>Home</li>
      </ul>
    </div>
  );
}

export default NavBar;
