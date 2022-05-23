import React from "react";
import "./style.css";

export default function ButtonClick({ handleClick }) {
  return (
    <div>
      <div
        className="bg-emerald-100 w-4 h-4 rounded-sm"
        onClick={() => handleClick()}
      ></div>
    </div>
  );
}
