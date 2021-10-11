import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Input from "./Input";
import { ReactComponent as User } from "../img/person.svg";
import { ReactComponent as Password } from "../img/password.svg";
import NavBar from "../components/NavBar";
function Login(props) {
  document.body.style.backgroundColor = "#9C9CD3";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username", username);
    console.log("password", password);
  };

  return (
    <>
      <NavBar />
      <div className="box Login-box">
        <form onSubmit={handleSubmit}>
          <h1 className="Login-title">Log In</h1>

          <Input
            Icon={User}
            className="Login-inputbox"
            value={username}
            setValue={setUsername}
            placeholder="username"
            type="text"
            required
          />

          <Input
            Icon={Password}
            className="Login-inputbox"
            setValue={setPassword}
            value={password}
            placeholder="password"
            type="text"
            required
          />

          <Link to="/todo">
            <button className="Login-button" type="button">
              Log In
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
