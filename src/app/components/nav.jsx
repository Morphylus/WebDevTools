import React, { useState, useRef, useEffect } from "react";
import Search from "./search";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FaTools, FaCode, FaMarkdown, FaInfo } from "react-icons/fa";
import { IoMdGitPullRequest } from "react-icons/io";
import Link from "next/link";
import Switch from "@mui/material/Switch";

export default function Nav({ isDarkMode, toggleTheme }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function searchToggle() {
    setToggle(!toggle);
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-blue-500 text-black"
      } py-2 px-4 flex items-center justify-around gap-1 w-full relative mb-10 max-h-[10vh]`}
    >
      <div className="flex flex-0 items-center flex-shrink">
        <Link
          href="/"
          className={`flex items-center border rounded p-2 hover:${
            isDarkMode ? "bg-gray-700" : "bg-blue-600"
          } mr-2`}
        >
          <h1 className="text-sm md:text-lg lg:text-xl font-bold mr-1">
            Web Dev Tools
          </h1>
        </Link>
        &emsp;
        <div className="hidden lg:block mr-2">
          <Search />
        </div>
      </div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className={`focus:outline-none text-[0.58rem] font-bold sm:font-bold items-center sm:text-sm flex md:text-sm  flex-1 p-2 hover:${
            isDarkMode ? "bg-gray-700" : "bg-blue-700"
          } transition-all duration-700 rounded-lg`}
        >
          <FaTools fontSize={20} className="mr-2" />
          Customizer tools
          <svg
            className={`${
              isDropdownOpen ? "transform rotate-180" : ""
            } inline-block ml-[2px] w-[12px] h-4`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className={`absolute right-0 mt-2 py-2 bg-white rounded shadow-lg w-40 `}
            style={{ zIndex: 100 }}
          >
            <Link
              href="customizer/box-shadow-generator"
              className={`block px-4 py-2 hover:${
                isDarkMode ? "bg-gray-800 text-gray-500" : "bg-gray-800 text-gray-500"
              }`}
            >
              Box Shadow Generator
            </Link>
            <Link
              href="customizer/gradient-generator"
              className={`block px-4 py-2 hover:${
                isDarkMode ? "bg-gray-800 text-gray-500" : "bg-gray-800 text-gray-500"
              }`}
            >
              CSS Gradient Generator
            </Link>
            <hr />
            <Link
              href="customizer/button"
              className={`block px-4 py-2 hover:${
                isDarkMode ? "bg-gray-800 text-gray-500" : "bg-gray-800 text-gray-500"
              }`}
            >
              Buttons
            </Link>
            <hr />
            <Link
              href="customizer/LoremIpsumGenerator"
              className={`block px-4 py-2 hover:${
                isDarkMode ? "bg-gray-800 text-gray-500" : "bg-gray-800 text-gray-500"
              }`}
            >
              Lorem Ipsum Generator
            </Link>
            <Link
              href="customizer/CupcakeIpsumGenerator"
              className={`block px-4 py-2 hover:${
                isDarkMode ? "bg-gray-800 text-gray-500" : "bg-gray-800 text-gray-500"
              }`}
            >
              Cupcake Ipsum Generator
            </Link>
            <Link
              href="customizer/conversionCalculator"
              className={`block px-4 py-2 hover:${
                isDarkMode ? "bg-gray-800 text-gray-500" : "bg-gray-800 text-gray-500"
              }`}
            >
              Conversion Calculator
            </Link>
            <Link
              href="customizer/colorPicker"
              className={`block px-4 py-2 hover:${
                isDarkMode ? "bg-gray-800 text-gray-500" : "bg-gray-800 text-gray-500"
              }`}
            >
              Color picker
            </Link>
            <Link
              href="customizer/JsonGenerator"
              className={`block px-4 py-2 hover:${
                isDarkMode ? "bg-gray-800 text-gray-500" : "bg-gray-800 text-gray-500"
              }`}
            >
              Json Generator
            </Link>
          </div>
        )}
      </div>

      <div className="flex ml-1 justify-center gap-2  md:gap-4 items-center">
        <Link
          href="/codeedit"
          className={`text-[0.57rem] font-bold  sm:text-sm p-2 hover:${
            isDarkMode ? "bg-gray-700" : "bg-blue-700"
          } transition-all duration-700 rounded-lg`}
        >
          <p className="flex items-center justify-center gap-2">
            <FaCode fontSize={20} />
            Code Editor
          </p>
        </Link>
        <Link
          href="/MD"
          className={`text-[0.57rem] font-bold  sm:text-sm p-2 hover:${
            isDarkMode ? "bg-gray-700" : "bg-blue-700"
          } transition-all duration-700 rounded-lg`}
        >
          <p className="flex items-center justify-center gap-2">
            {" "}
            <FaMarkdown fontSize={20} />
            Markdown Editor
          </p>
        </Link>
        <Link
          href="/about"
          className={`font-bold text-[0.6rem]  sm:text-sm p-2 hover:${
            isDarkMode ? "bg-gray-700" : "bg-blue-700"
          } transition-all duration-700 rounded-lg flex items-center justify-center gap-2`}
        >
          <FaInfo fontSize={15} />
          About
        </Link>
        <Link
          href="/contribute"
          className={`font-bold text-[0.6rem]  sm:text-sm  p-2 hover:${
            isDarkMode ? "bg-gray-700" : "bg-blue-700"
          } transition-all duration-700 rounded-lg flex items-center justify-center gap-2`}
        >
          <IoMdGitPullRequest fontSize={20} />
          Contribute
        </Link>
        <button onClick={searchToggle} className="lg:hidden">
          <SearchIcon className="text-white" onClick={searchToggle} />
        </button>
        <div
          className={`absolute w-full h-full flex  items-center  bg-blue-500 ${
            toggle
              ? "left-0 duration-300 ease-in"
              : "left-[100%] duration-300 ease-in"
          } `}
        >
          <div className="flex flex-1 items-center text-white justify-center relative">
            <ArrowBackIcon
              className="mr-4 absolute left-2 cursor-pointer"
              onClick={searchToggle}
            />
            <Search />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          color="default"
          inputProps={{ "aria-label": "toggle dark mode" }}
        />
      </div>
    </nav>
  );
}
