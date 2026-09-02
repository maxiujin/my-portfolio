import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-2 tablet:p-3 px-4 tablet:px-6 m-1 laptop:m-2 rounded-full font-medium text-white transition-all duration-300 ease-out first:ml-0 hover:scale-105 hover:shadow-lg active:scale-100 link ${
          data.showCursor && "cursor-none"
        } ${classes}`}
        style={{
          background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
          boxShadow: "0 8px 30px -8px rgba(124,58,237,0.6)",
        }}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-full flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-white/10 text-white"
          : "hover:bg-black/5"
      } hover:scale-105 active:scale-100 tablet:first:ml-0 ${
        data.showCursor && "cursor-none"
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
