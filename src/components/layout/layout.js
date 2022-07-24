import React from "react";
import AmountCounter from "../AmountCounter/AmountCounter";
import "./layout.css";

function Layout({ head, content, children }) {
  return (
    <div className="Layout">
      <div className="Layout__head">
        {head}
        <AmountCounter />
      </div>
      <div className="Layout__center">{content || children}</div>
    </div>
  );
}

export default Layout;
