// import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-200 shadow-md">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <img src="Smion-Logo.png" alt="Smion-Logo" width={10} />
        </Link>

        <form
          className="bg-slate-100 p-3 rounded-lg flex items-center"
          action=""
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 text-red-600"
          />
          <FaSearch className="text-orange-600" />
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-orange-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-orange-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className="text-orange-700 hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
