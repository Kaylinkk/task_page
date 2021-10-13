import React, { useState, useEffect } from "react";
import styles from "./Signup.module.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Input from "./Input";
import { ReactComponent as Mail } from "../img/mail.svg";
import { ReactComponent as User } from "../img/person.svg";
import { ReactComponent as Password } from "../img/password.svg";
function SignUp(props) {
  // document.body.style.background =
  //   "linear-gradient(rgba(179,157,219,1) 16%, rgba(221,234,249,1) 100%) fixed";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username", username);
    console.log("password", password);
    console.log("eamil", email);
  };

  return (
    <>
      <div className={styles.box}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.h1}>Sign Up</h1>

          <Input
            Icon={Mail}
            className={styles.inputbox}
            value={email}
            setValue={setEmail}
            placeholder="e-mail"
            type="text"
            required
          />

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

          <Input
            Icon={Password}
            className={styles.inputbox}
            setValue={setPassword}
            value={password}
            placeholder="confirm password"
            type="text"
            required
          />

          <Link to="/todo">
            <button className={styles.button} type="button">
              Create Account
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default SignUp;
