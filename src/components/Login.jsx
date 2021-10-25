import React, { useState } from "react";

import Input from "./Input";
import { ReactComponent as User } from "../img/person.svg";
import { ReactComponent as Password } from "../img/password.svg";
import NavBar from "../components/NavBar";
import styles from "../css/Login.module.css";
function Login(props) {
  // document.body.style.backgroundColor = "#9C9CD3";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username", username);
    console.log("password", password);
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Log In</h1>

          <Input
            Icon={User}
            className={styles.input}
            value={username}
            setValue={setUsername}
            placeholder="username"
            type="text"
            required
          />

          <Input
            Icon={Password}
            className={styles.input}
            setValue={setPassword}
            value={password}
            placeholder="password"
            type="text"
            required
          />

          <button className={styles.btn} type="button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
