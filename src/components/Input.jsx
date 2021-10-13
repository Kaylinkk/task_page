import React from "react";
import styles from "./Input.module.css";

function Input({
  placeholder,
  type = "text",
  value,
  handleChange,
  Icon,
  setValue,
  className,
}) {
  return (
    <div className="input-task-container">
      <Icon></Icon>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
