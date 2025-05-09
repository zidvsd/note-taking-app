import React, { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
const MobileMenu = ({ className = "" }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className={`lg:hidden cursor-pointer text-warm-yellow relative ${className}`}
    >
      <MenuIcon
        className="size-10 relative transition-transform transform hover:scale-110"
        onClick={() => setIsToggled(!isToggled)}
      />
      <ul
        className={`text-white text-xl w-32 absolute left-0 bg-warm-yellow  p-4 font-semibold rounded-md shadow-lg transition-all duration-300 ${isToggled ? "flex flex-col" : "hidden"}`}
      >
        <li className="hover:text-pencil-orange transition-colors mb-2">
          <Link onClick={() => setIsToggled(false)} to={"/"}>
            Home
          </Link>
        </li>
        <li className="hover:text-pencil-orange transition-colors mb-2">
          <Link onClick={() => setIsToggled(false)} to={"/archive"}>
            Archive
          </Link>
        </li>
        <li className="hover:text-pencil-orange transition-colors">
          <Link onClick={() => setIsToggled(false)} to={"/trash"}>
            Trash
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
