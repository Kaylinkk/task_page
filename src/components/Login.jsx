import React, { useState } from "react";

import Input from "./Input";
import { ReactComponent as User } from "../img/person.svg";
import { ReactComponent as Password } from "../img/password.svg";
import NavBar from "../components/NavBar";
import styles from "../css/Login.module.css";
import * as auth from "../services/authService";

function Login(props) {
  // document.body.style.backgroundColor = "#9C9CD3";

  const [currentUser, setCurrentUser] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentUser(auth.login(currentUser));
    console.log("currentUser", currentUser);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
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
            value={currentUser.email}
            setValue={setCurrentUser}
            placeholder="email"
            name="email"
          />

          <Input
            Icon={Password}
            className={styles.input}
            setValue={setCurrentUser}
            value={currentUser.password}
            placeholder="password"
            type="password"
            name="password"
          />

          <button className={styles.btn} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
