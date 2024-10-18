"use client";

import React, { useState } from "react";

const Tooltip = () => {
  const [isHover, setIsHover] = useState<number | null>(null);

  const tooltips = {
    url4: "/tooltip4.png",
    url3: "/tooltip3.png",
    url2: "/tooltip2.png",
    url1: "/tooltip1.png",
  };

  return (
    <>
      <div className="relative px-3">
        {Object.values(tooltips).map((url, index) => (
          <div
            key={index}
            className="absolute cursor-pointer w-12 transition-all duration-300 h-12 rounded-full z-0 hover:z-20"
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              left: `${index * 35}px`,
              zIndex: isHover === index ? 10 : index,
              transform: isHover === index ? "scale(1.1)" : "scale(1)",
            }}
            onMouseEnter={() => setIsHover(index)}
            onMouseLeave={() => setIsHover(null)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Tooltip;
