import React from "react";
import { useState } from "react";
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex flex-row gap-x-2 items-center">
      <h1>{isDarkMode ? "Dark" : "Light"}</h1>
      <div
        className={`w-12 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          isDarkMode ? "bg-warm-yellow" : "bg-gray-300"
        }`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <div
          className={`size-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
