// import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <img src="logo.png" alt="logo" width={150} />
        </Link>

        <form
          className="bg-orange-50 p-3 rounded-lg flex items-center"
          action=""
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 text-gray-600"
          />
          <FaSearch className="text-orange-500" />
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-orange-600 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-600 hover:underline">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className="text-slate-600 hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
