import React, { useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Input from "./Input";
import { ReactComponent as Mail } from "../img/mail.svg";
import { ReactComponent as User } from "../img/person.svg";
import { ReactComponent as Password } from "../img/password.svg";
import NavBar from "./NavBar";
import styles from "../css/Login.module.css";

function SignUp(props) {
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
    <div className={styles.container}>
      <NavBar />
      <div className={styles.SignUpformContainer}>
        <form onSubmit={handleSubmit} className={styles.SignUpform}>
          <h1 className={styles.title}>Sign Up</h1>

          <Input
            Icon={Mail}
            className={styles.input}
            value={email}
            setValue={setEmail}
            placeholder="e-mail"
            type="text"
            required
          />

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

          <Input
            Icon={Password}
            className={styles.input}
            setValue={setPassword}
            value={password}
            placeholder="confirm password"
            type="text"
            required
          />

          <Link to="/todo">
            <button className={styles.btn} type="button">
              Create Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
