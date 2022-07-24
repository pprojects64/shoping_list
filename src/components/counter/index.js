import React, { useState } from "react";
import { preventDefault } from "../../utils/preventDefault";
import "./styles.css";

export function Counter({ initValue }) {
  const [count, setCounter] = useState(initValue);

  // let countHandler = (sym) => {
  //   if (count === 1) {
  //     if (sym === "minus") {
  //       setCounter(count);
  //     } else setCounter(count + 1);
  //   } else {
  //     sym === "plus" ? setCounter(count + 1) : setCounter(count - 1);
  //   }
  // };

  const handleMinus = () => {
    count > 1 && setCounter(count - 1);
  };

  const handlePlus = () => {
    setCounter(count + 1);
  };

  return (
    <div className="counter">
      <button
        className="setCounter-button"
        onClick={preventDefault(handleMinus)}
      >
        -
      </button>
      <span className="count">{count}</span>
      <button
        className="setCounter-button"
        onClick={preventDefault(handlePlus)}
      >
        +
      </button>
    </div>
  );
}
