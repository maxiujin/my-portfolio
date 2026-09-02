import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="glow-card glass w-full p-5 mob:p-6 link">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full" style={{ background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))" }}></span>
        <h1 className="text-2xl laptop:text-3xl font-semibold">{name ? name : "Heading"}</h1>
      </div>
      <p className="mt-4 opacity-50 text-base laptop:text-lg">
        {description
          ? description
          : "I'm a hardworking engineer that can work in big teams and can lead teams as well. "}
      </p>
    </div>
  );
};

export default ServiceCard;
