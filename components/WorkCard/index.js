import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="glow-card glass overflow-hidden p-3 laptop:p-4 link cursor-pointer group"
      onClick={onClick}
    >
      <div
        className="relative rounded-xl overflow-hidden transition-all ease-out duration-300"
        style={{ height: "260px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover group-hover:scale-110 transition-all ease-out duration-500"
          src={img}
        ></img>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-medium flex items-center gap-1">
            View project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
      <h1 className="mt-4 text-2xl laptop:text-3xl font-semibold">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-base laptop:text-lg opacity-50 mt-1">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
