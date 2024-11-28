import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-300 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-indigo-400 hover:text-indigo-500 transition duration-300"
        >
          Blog<span className="text-gray-100">Site</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-lg font-mono">
          <NavLink to="/most-liked">Most Liked</NavLink>
          <NavLink to="/trending">Trending</NavLink>
          <NavLink to="/create">Create Blog</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>

        {/* Mobile Menu */}
        <button
          id="mobile-menu-button"
          className="block md:hidden text-indigo-400 focus:outline-none"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

/* Reusable Link Component */
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white transition duration-300"
  >
    {children}
  </Link>
);

export default Navbar;
