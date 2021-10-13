import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Input from "./Input";
import { ReactComponent as User } from "../img/person.svg";
import { ReactComponent as Password } from "../img/password.svg";
import NavBar from "../NavBar";
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
    <div className="login-page-container">
      <NavBar />
      <div className={styles.box}>
        <h1 className={styles.title}>Log In</h1>
        <form onSubmit={handleSubmit}>
          <Input
            Icon={User}
            value={username}
            setValue={setUsername}
            placeholder="username"
            type="text"
            required
          />

          <Input
            Icon={Password}
            setValue={setPassword}
            value={password}
            placeholder="password"
            type="text"
            required
          />

          <button className={styles.button} type="button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
