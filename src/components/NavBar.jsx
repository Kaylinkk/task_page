import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../img/logo_PNG_Transparent.png";
function NavBar() {
  return (
    <>
      <nav>
        <Link to="/" className="logo">
          <img src={logo} alt="logo"></img>
        </Link>
        <NavLink to="/" className="links">
          Home
        </NavLink>
        <NavLink to="/profile" className="links">
          Profile
        </NavLink>
        <NavLink to="/signup" className="links">
          Sign Up
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;
