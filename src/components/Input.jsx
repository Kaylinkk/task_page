import React from "react";

function Input({
  placeholder,
  type = "text",
  value,
  handleChange,
  Icon,
  setValue,
}) {
  return (
    <div className="input-Container">
      <Icon></Icon>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
