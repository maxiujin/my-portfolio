import React from "react";

const StackLine = ({ label, value }) => {
  if (!value) return null;
  return (
    <p
      className="text-[10px] laptop:text-[11px] leading-tight opacity-60 truncate"
      title={`${label}: ${value}`}
    >
      <span className="font-semibold opacity-90">{label} </span>
      {value}
    </p>
  );
};

const WorkCard = ({ img, name, description, techStack, imgAspect = "aspect-video", onClick }) => {
  return (
    <div
      className="glow-card glass overflow-hidden p-2 laptop:p-3 link cursor-pointer group flex flex-col"
      onClick={onClick}
    >
      <div className={`relative rounded-lg overflow-hidden w-full ${imgAspect} transition-all ease-out duration-300`}>
        <img
          alt={name}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all ease-out duration-500"
          src={img}
        ></img>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <span className="text-white text-xs font-medium flex items-center gap-1">
            View project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
      <h1 className="mt-2 text-sm laptop:text-base font-semibold leading-snug line-clamp-2">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xs laptop:text-sm opacity-50 mt-0.5 line-clamp-2">
        {description ? description : "Description"}
      </h2>
      {techStack && (
        <div className="mt-1.5 space-y-0.5">
          <StackLine label="Frontend:" value={techStack.frontend} />
          <StackLine label="Backend:" value={techStack.backend} />
          <StackLine label="Deploy:" value={techStack.deployment} />
        </div>
      )}
    </div>
  );
};

export default WorkCard;
