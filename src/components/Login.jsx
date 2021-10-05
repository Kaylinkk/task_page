import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUserName = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePW = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.box}>
        <div className={styles.login}>
          <div className={styles.title}>Log In</div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.inputbox}
              onChange={handleChangeUserName}
              value={username}
              placeholder="username"
              type="text"
              required
            />
            <input
              className={styles.inputbox}
              onChange={handleChangePW}
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
      </div>
    </>
  );
}

export default Login;
