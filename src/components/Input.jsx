import React from "react";
import styles from "./Input.module.css";

function Input({
  placeholder,
  type = "text",
  value,
  handleChange,
  Icon,
  setValue,
}) {
  return (
    <div className={styles.inputContainer}>
      <Icon></Icon>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.targert.value)}
      />
    </div>
  );
}

export default Input;
