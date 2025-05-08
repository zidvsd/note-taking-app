import React, { useEffect } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Settings } from "lucide-react";
import { SettingsIcon } from "lucide-react";
const NavBar = () => {
  const tabs = ["Home", "Archive", "Trash"];
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="w-full flex flex-row justify-between items-center lg:border-b-warm-yellow lg:border-b pb-1">
      <Logo />
      <ul className="flex flex-row gap-x-2 items-center">
        {tabs.map((tab, index) => (
          <li
            className={`heading-text ${
              activeTab === tab
                ? "text-warm-yellow"
                : "hover-opacity  text-graphite-gray"
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
      <div className="flex flex-row gap-x-2 items-center">
        <DarkModeToggle />
        <Link to={"/settings"} className="hover-opacity">
          <SettingsIcon />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
