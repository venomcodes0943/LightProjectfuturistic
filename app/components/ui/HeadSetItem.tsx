import React from "react";

type HeadSet = {
  url: string;
  title: string;
  about: string;
};

const HeadSetItem = ({ url, title, about }: HeadSet) => {
  return (
    <div className="relative w-full">
      <div
        style={{
          backgroundImage: `url(${url})`,
        }}
        className="rounded-md w-full h-80 bg-cover bg-center"
      ></div>
      <div className="absolute rounded-bl-md left-0 bottom-0 bg-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md px-2 py-2 md:px-4 md:py-6 max-w-48 md:max-w-72">
        <div className="text-base md:text-xl font-[family-name:var(--font-orbitron)] mb-2 underline">
          {title}
        </div>
        <div className="text-sm md:text-base">{about}</div>
      </div>
    </div>
  );
};

export default HeadSetItem;
