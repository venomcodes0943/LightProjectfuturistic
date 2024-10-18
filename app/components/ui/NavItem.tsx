import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
type NavItem = {
  children: React.ReactNode;
  active?: string;
};

const NavItem = ({ children, active }: NavItem) => {
  return (
    <div className="cursor-pointer relative">
      <li
        className={twMerge(
          clsx(
            "font-[family-name:var(--font-inter)] font-medium list-none transition-all duration-200 px-3 after:content-[''] after:block after:w-3 after:h-1 after:bg-transparent after:rounded-md after:m-auto after:mt-1",
            active
              ? "text-transparent bg-clip-text bg-gradient-to-r from-[#C824EC] to-[#DF308D] after:content-[''] after:block after:w-3 after:h-1 after:bg-white after:rounded-md after:m-auto after:mt-1"
              : "text-white"
          )
        )}
      >
        {children}
      </li>
    </div>
  );
};

export default NavItem;
