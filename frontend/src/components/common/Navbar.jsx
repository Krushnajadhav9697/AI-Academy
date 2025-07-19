import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Burger and Close icons
import logo from "../../assets/images/tenlogo.jpg";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle

  const isActive = (path) => currentPath === path;

  return (
    <nav className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-[1300px] mx-auto px-6 py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-rose-500">AI-Academy</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <li>
            <Link
              to="/"
              className={`hover:text-[#3D74B6] ${
                isActive("/") ? "text-[#3D74B6] font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className={`hover:text-[#3D74B6] ${
                isActive("/courses") ? "text-[#3D74B6] font-bold" : ""
              }`}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-[#3D74B6] ${
                isActive("/about") ? "text-[#3D74B6] font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/playground"
              className={`hover:text-[#3D74B6] ${
                isActive("/playground") ? "text-[#3D74B6] font-bold" : ""
              }`}
            >
              Playground (AI tool)
            </Link>
          </li>
          <li>
            <Link
              to="/join"
              className={`hover:text-[#3D74B6] ${
                isActive("/join") ? "text-[#3D74B6] font-bold" : ""
              }`}
            >
              Join
            </Link>
          </li>
        </ul>

        {/* Desktop Login Button */}
        <Link to="/signin" className="hidden md:inline-block">
          <button className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition">
            Log In
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`hover:text-[#3D74B6] ${
              isActive("/") ? "text-[#3D74B6] font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/courses"
            onClick={() => setIsOpen(false)}
            className={`hover:text-[#3D74B6] ${
              isActive("/courses") ? "text-[#3D74B6] font-bold" : ""
            }`}
          >
            Courses
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`hover:text-[#3D74B6] ${
              isActive("/about") ? "text-[#3D74B6] font-bold" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/playground"
            onClick={() => setIsOpen(false)}
            className={`hover:text-[#3D74B6] ${
              isActive("/playground") ? "text-[#3D74B6] font-bold" : ""
            }`}
          >
            Playground (AI tool)
          </Link>
          <Link
            to="/join"
            onClick={() => setIsOpen(false)}
            className={`hover:text-[#3D74B6] ${
              isActive("/join") ? "text-[#3D74B6] font-bold" : ""
            }`}
          >
            Join
          </Link>
          <Link to="/signin" onClick={() => setIsOpen(false)}>
            <button className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition w-full">
              Log In
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
