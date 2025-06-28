
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../redux/darkModeSlice";
import { FaMoon, FaSun } from "react-icons/fa";

function DarkModeButton() {
  const isDark = useSelector((state) => state.darkMode.isDark);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(setDarkMode());
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full ${
        isDark ? "text-white hover:bg-gray-600" : "text-gray-900 hover:bg-gray-200"
      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform duration-200 hover:scale-105`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}

export default DarkModeButton;
