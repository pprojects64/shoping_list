import React from "react";
import { useState } from "react";
import "./Input.css";

export function Input(props) {
  const { placeholder, type = "text", inputId, initValue } = props;

  const [value, setValue] = useState(initValue);

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      id={inputId}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
