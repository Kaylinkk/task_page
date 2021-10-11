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
    <>
      <NavBar />
      <div className={styles.box}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.title}>Log In</h1>

          <Input
            Icon={User}
            className={styles.inputbox}
            value={username}
            setValue={setUsername}
            placeholder="username"
            type="text"
            required
          />

          <Input
            Icon={Password}
            className={styles.inputbox}
            setValue={setPassword}
            value={password}
            placeholder="password"
            type="text"
            required
          />

          <Link to="/todo">
            <button className={styles.button} type="button">
              Log In
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
