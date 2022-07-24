import "./Select.css";
import { nanoid } from "nanoid";
import useChoices from "../../utils/useChoices";
import { useState } from "react";

function Select({ options, initValue }) {
  // хук инициализирует библиотеку choices.js, чтоб кастомизировать скролл
  useChoices();

  return (
    <select
      className="select-form"
      id="select"
      required={true}
      name="unit"
      value={initValue}
      readOnly
    >
      {options.map((option) => (
        <option value={option} key={nanoid()}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
