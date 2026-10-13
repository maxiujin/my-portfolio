import React from "react";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`m-1 laptop:m-1.5 px-3 text-sm ${
        type === "primary" ? "default" : ""
      } ${data.showCursor && "cursor-none"} ${classes || ""} link`}
    >
      {children}
    </button>
  );
};

export default Button;
