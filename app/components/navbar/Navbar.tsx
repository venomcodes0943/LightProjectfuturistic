import React from "react";
import NavItem from "../ui/NavItem";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full">
      <div className="text-base md:text-2xl font-[family-name:var(--font-imfell-great)] uppercase">
        <span className="text-2xl md:text-4xl uppercase">L</span>
        ight
      </div>
      <ul className="hidden md:flex items-center justify-between gap-4">
        <NavItem active="true">Home</NavItem>
        <NavItem>Company</NavItem>
        <NavItem>Feature</NavItem>
        <Button className="font-bold">Sign Up</Button>
      </ul>
    </nav>
  );
};

export default Navbar;
