import React, { useEffect } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import MobileMenu from "./MobileMenu";
import { SettingsIcon } from "lucide-react";
const NavBar = () => {
  const tabs = ["Home", "Archive", "Trash"];
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="w-full  flex flex-row justify-between items-center lg:border-b-warm-yellow lg:border-b pb-1">
      <Logo className="order-1 lg:order-0" />
      <MobileMenu className="order-0" />
      <ul className="hidden lg:flex flex-row gap-x-2 items-center  ">
        {tabs.map((tab, index) => (
          <li
            className={`heading-text ${
              activeTab === tab
                ? "text-warm-yellow"
                : "hover-opacity  text-graphite-gray dark:text-white"
            }`}
            onClick={() => setActiveTab(tab)}
            key={index}
          >
            <Link to={tab === "Home" ? "/" : `${tab.toLowerCase()}`}>
              {tab}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-row gap-x-3 md:gap-x-4 items-center order-2">
        <DarkModeToggle />
        <Link to={"/settings"} className="hover-opacity">
          <SettingsIcon className="dark:text-white size-5 md:size-7 fill-" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
