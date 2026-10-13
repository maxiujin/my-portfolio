import React from "react";

const Win98Window = ({ title, children, className = "", bodyClassName = "", onTitleClick }) => {
  return (
    <div className={`window ${className}`}>
      <div className="title-bar">
        <div
          className="title-bar-text"
          onClick={onTitleClick}
          style={onTitleClick ? { cursor: "pointer" } : undefined}
        >
          {title}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className={`window-body ${bodyClassName}`}>{children}</div>
    </div>
  );
};

export default Win98Window;
