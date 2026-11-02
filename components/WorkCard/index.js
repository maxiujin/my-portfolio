import React from "react";

const StackLine = ({ label, value, large }) => {
  if (!value) return null;
  return (
    <p
      className={`${large ? "text-xs laptop:text-sm" : "text-[10px] laptop:text-[11px]"} leading-tight opacity-60 truncate`}
      title={`${label}: ${value}`}
    >
      <span className="font-semibold opacity-90">{label} </span>
      {value}
    </p>
  );
};

const WorkCard = ({ img, name, description, techStack, imgAspect = "aspect-video", large = false, onClick }) => {
  const title = name ? name : "Project Name";
  return (
    <div className="window work-window link cursor-pointer group flex flex-col h-full" onClick={onClick}>
      <div className="title-bar">
        <div className="title-bar-text truncate">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" tabIndex={-1}></button>
          <button aria-label="Maximize" tabIndex={-1}></button>
          <button aria-label="Close" tabIndex={-1}></button>
        </div>
      </div>
      {large && (
        <div className="work-menubar">
          <span><u>F</u>ile</span>
          <span><u>E</u>dit</span>
          <span><u>V</u>iew</span>
          <span><u>H</u>elp</span>
        </div>
      )}
      <div className={`work-sunken flex-1 min-h-0 flex flex-col ${large ? "m-1.5 p-2 laptop:p-3" : "m-1 p-1.5"}`}>
        <div className={`relative overflow-hidden w-full ${imgAspect} flex-shrink-0`}>
          <img
            alt={title}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-all ease-out duration-500"
            src={img}
          ></img>
        </div>
        <h1 className={`${large ? "mt-3 text-lg laptop:text-2xl" : "mt-1.5 text-sm laptop:text-base"} font-semibold leading-snug line-clamp-2`}>
          {title}
        </h1>
        <h2 className={`${large ? "text-sm laptop:text-base mt-1" : "text-xs laptop:text-sm mt-0.5"} opacity-60 line-clamp-2`}>
          {description ? description : "Description"}
        </h2>
        {techStack && (
          <div className={large ? "mt-3 space-y-1" : "mt-1.5 space-y-0.5"}>
            <StackLine label="Frontend:" large={large} value={techStack.frontend} />
            <StackLine label="Backend:" large={large} value={techStack.backend} />
            <StackLine label="Deploy:" large={large} value={techStack.deployment} />
          </div>
        )}
      </div>
      {large && (
        <div className="status-bar">
          <p className="status-bar-field">Ready</p>
          <p className="status-bar-field">Open project →</p>
        </div>
      )}
    </div>
  );
};

export default WorkCard;
