import React from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";
const Logo = ({ className }) => {
  return (
    <Link
      to={"/"}
      className={` ${className} flex flex-row items-center gap-x-2 hover:scale-110 transition-scale duration-300 ease-in-out`}
    >
      <img className="size-6" src={logo} alt="" />
      <h1 className="text-pencil-orange heading-text">
        <span className="text-warm-yellow">Jot</span>Note
      </h1>
    </Link>
  );
};

export default Logo;
