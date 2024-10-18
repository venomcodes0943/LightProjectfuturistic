import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`rounded-[3.34px] cursor-pointer bg-gradient-to-r from-[#BC3CD8] to-[#C54B8C] py-2 px-4 text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
