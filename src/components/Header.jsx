import React from "react";
import {FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-200 shadow-md">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-1">
        <div className="flex flex-wrap">
            <link rel="stylesheet" href="" />
          <img src="Smion-Logo.png" alt="Smion-Logo" width={150} />
        </div>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center" action="">
          <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64 text-red-600"/>
          <FaSearch className="text-orange-600"/>
        </form>
        <ul className="flex gap-4">
            <li className="hidden sm:inline text-orange-700 hover:underline">Home</li>
            <li className="hidden sm:inline text-orange-700 hover:underline">About</li>
            <li className="hidden sm:inline text-orange-700 hover:underline">Sign In</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
