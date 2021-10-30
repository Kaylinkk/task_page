import React, { useState } from "react";
import Input from "./Input";
import { ReactComponent as Mail } from "../img/mail.svg";
import { ReactComponent as User } from "../img/person.svg";
import { ReactComponent as Password } from "../img/password.svg";
import NavBar from "./NavBar";
import styles from "../css/Login.module.css";
import * as auth from "../services/authService";

function SignUp(props) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    console.log("asdasdasd");
    e.preventDefault();
    console.log("user", user);
    const response = auth.register(user);
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
            value={user.email}
            setValue={setUser}
            placeholder="e-mail"
            name="email"
          />

          <Input
            Icon={User}
            className={styles.input}
            value={user.username}
            setValue={setUser}
            placeholder="username"
            name="username"
          />

          <Input
            Icon={Password}
            className={styles.input}
            value={user.password}
            setValue={setUser}
            placeholder="password"
            type="password"
            name="password"
          />

          <Input
            Icon={Password}
            className={styles.input}
            value={user.confirmPassword}
            setValue={setUser}
            placeholder="confirm password"
            type="password"
            name="confirmPassword"
          />

          <button className={styles.btn} type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
