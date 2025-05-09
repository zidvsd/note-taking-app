import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDarkMode(false);

      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    const newTheme = newMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex flex-row gap-x-2 items-center">
      {isDarkMode ? (
        <Moon
          onClick={toggleDarkMode}
          className="text-black dark:text-white cursor-pointer size-5 md:size-7 hover-opacity  "
        />
      ) : (
        <Sun
          onClick={toggleDarkMode}
          className="text-black dark:text-white cursor-pointer size-5 md:size-7 hover-opacity"
        />
      )}
      <div
        className={`w-12 h-7 hidden lg:flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          isDarkMode ? "bg-yellow-500" : "bg-gray-300"
        }`}
        onClick={toggleDarkMode}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
