
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarExtendedValue } from "../redux/categorySlice";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Menu from "../assets/Menu";
import DarkModeButton from "./DarkModeButton";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const { sidebarExtended, isLoading } = useSelector((state) => state.category);
  const { isLoading: channelLoading } = useSelector((state) => state.channel);
  const { isLoading: videoLoading } = useSelector((state) => state.video);
  const { isLoading: searchLoading } = useSelector((state) => state.search);
  const { darkMode } = useSelector((state) => state.darkMode);

  const isAnyLoading = isLoading || channelLoading || videoLoading || searchLoading;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search/${encodeURIComponent(searchValue)}`);
      setSearchValue("");
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-14 z-50 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
    >
      {isAnyLoading && (
        <Stack sx={{ width: "100%", color: "grey.500" }}>
          <LinearProgress color="error" />
        </Stack>
      )}
      <nav className="flex items-center justify-between px-4 h-full">
        {/* Left Section: Menu and Logo */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => dispatch(setSidebarExtendedValue(!sidebarExtended))}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle sidebar"
          >
            <Menu />
          </button>
          <Link to="/" aria-label="YouTube Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="yt-ringo2-svg_yt10"
              width="90"
              height="20"
              viewBox="0 0 93 20"
              focusable="false"
              aria-hidden="true"
              className="h-5 w-auto"
            >
              <g>
                <path
                  d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z"
                  fill="#FF0033"
                />
                <path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white" />
              </g>
              <g id="youtube-paths_yt10" fill={darkMode ? "#FFFFFF" : "#000000"}>
                <path d="M37.1384 18.8999V13.4399L40.6084 2.09994H38.0184L36.6984 7.24994C36.3984 8.42994 36.1284 9.65994 35.9284 10.7999H35.7684C35.6584 9.79994 35.3384 8.48994 35.0184 7.22994L33.7384 2.09994H31.1484L34.5684 13.4399V18.8999H37.1384Z" />
                <path d="M44.1003 6.29994C41.0703 6.29994 40.0303 8.04994 40.0303 11.8199V13.6099C40.0303 16.9899 40.6803 19.1099 44.0403 19.1099C47.3503 19.1099 48.0603 17.0899 48.0603 13.6099V11.8199C48.0603 8.44994 47.3803 6.29994 44.1003 6.29994ZM45.3903 14.7199C45.3903 16.3599 45.1003 17.3899 44.0503 17.3899C43.0203 17.3899 42.7303 16.3499 42.7303 14.7199V10.6799C42.7303 9.27994 42.9303 8.02994 44.0503 8.02994C45.2303 8.02994 45.3903 9.34994 45.3903 10.6799V14.7199Z" />
                <path d="M52.2713 19.0899C53.7313 19.0899 54.6413 18.4799 55.3913 17.3799H55.5013L55.6113 18.8999H57.6012V6.53994H54.9613V16.4699C54.6812 16.9599 54.0312 17.3199 53.4212 17.3199C52.6512 17.3199 52.4113 16.7099 52.4113 15.6899V6.53994H49.7812V15.8099C49.7812 17.8199 50.3613 19.0899 52.2713 19.0899Z" />
                <path d="M62.8261 18.8999V4.14994H65.8661V2.09994H57.1761V4.14994H60.2161V18.8999H62.8261Z" />
                <path d="M67.8728 19.0899C69.3328 19.0899 70.2428 18.4799 70.9928 17.3799H71.1028L71.2128 18.8999H73.2028V6.53994H70.5628V16.4699C70.2828 16.9599 69.6328 17.3199 69.0228 17.3199C68.2528 17.3199 68.0128 16.7099 68.0128 15.6899V6.53994H65.3828V15.8099C65.3828 17.8199 65.9628 19.0899 67.8728 19.0899Z" />
                <path d="M80.6744 6.26994C79.3944 6.26994 78.4744 6.82994 77.8644 7.73994H77.7344C77.8144 6.53994 77.8744 5.51994 77.8744 4.70994V1.43994H75.3244L75.3144 12.1799L75.3244 18.8999H77.5444L77.7344 17.6999H77.8044C78.3944 18.5099 79.3044 19.0199 80.5144 19.0199C82.5244 19.0199 83.3844 17.2899 83.3844 13.6099V11.6999C83.3844 8.25994 82.9944 6.26994 80.6744 6.26994ZM80.7644 13.6099C80.7644 15.9099 80.4244 17.2799 79.3544 17.2799C78.8544 17.2799 78.1644 17.0399 77.8544 16.5899V9.23994C78.1244 8.53994 78.7244 8.02994 79.3944 8.02994C80.4744 8.02994 80.7644 9.33994 80.7644 11.7299V13.6099Z" />
                <path d="M92.6517 11.4999C92.6517 8.51994 92.3517 6.30994 88.9217 6.30994C85.6917 6.30994 84.9717 8.45994 84.9717 11.6199V13.7899C84.9717 16.8699 85.6317 19.1099 88.8417 19.1099C91.3817 19.1099 92.6917 17.8399 92.5417 15.3799L90.2917 15.2599C90.2617 16.7799 89.9117 17.3999 88.9017 17.3999C87.6317 17.3999 87.5717 16.1899 87.5717 14.3899V13.5499H92.6517V11.4999ZM88.8617 7.96994C90.0817 7.96994 90.1717 9.11994 90.1717 11.0699V12.0799H87.5717V11.0699C87.5717 9.13994 87.6517 7.96994 88.8617 7.96994Z" />
              </g>
            </svg>
          </Link>
        </div>

        {/* Center Section: Search Bar */}
        <div className="hidden md:flex flex-1 max-w-[600px] mx-4">
          <form onSubmit={handleSearchSubmit} className="flex w-full">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className={`flex-1 px-4 py-2 border rounded-l-full ${
                darkMode
                  ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:outline-none focus:border-blue-500`}
              aria-label="Search videos"
            />
            <button
              type="submit"
              className={`px-6 py-2 border border-l-0 rounded-r-full ${
                darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"
              } hover:bg-gray-200 dark:hover:bg-gray-600`}
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  clipRule="evenodd"
                  d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </form>
          <button
            className={`ml-2 p-2 rounded-full ${
              darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="Search with your voice"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"
              />
            </svg>
          </button>
        </div>

        {/* Right Section: Dark Mode and Profile */}
        <div className="flex items-center space-x-4">
          <DarkModeButton />
          <button
            className={`flex items-center space-x-2 px-3 py-1 border rounded-full ${
              darkMode
                ? "border-gray-600 hover:bg-gray-700"
                : "border-blue-500 hover:bg-blue-50"
            }`}
            aria-label="Sign in"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
              />
            </svg>
            <span className="hidden sm:inline">Sign In</span>
          </button>
        </div>

        {/* Mobile Search Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              clipRule="evenodd"
              d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
