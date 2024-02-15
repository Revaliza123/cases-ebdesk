import React, { useState } from "react";
import { Link } from "react-router-dom";
import logof from "../assets/Vector.png";

export default function NavHome() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="container bg-transparent top-0 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500   transition duration-150 ease-in-out"
              onClick={handleMenuClick}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center">
            <Link to="/">
              <img
                className="hidden md:block lg:h-8 lg:w-auto md:h-6 md:w-auto h-8 w-auto"
                src={logof}
                alt="Logo"
              />
            </Link>
            <span className="hidden md:block text-black ml-2 font-bold">
              <Link to="/">Logoipsum</Link>
            </span>
          </div>

          <div className="hidden md:flex md:items-center md:ml-6 ">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="hover:text-black text-slate-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/product"
                className="hover:text-black text-slate-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Product
              </Link>
              <Link
                to="#pricing"
                className="hover:text-black text-slate-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="hover:text-black text-slate-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="hover:text-black text-slate-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/login"
              className="whitespace-nowrap text-base font-medium hover:text-black text-slate-500 mr-4"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="whitespace-nowrap text-base font-medium hover:text-black hover:bg-blue-500 text-blue-500 mr-4 border border-blue-500 rounded-full px-7 py-2"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 text-center">
            <Link
              to="/"
              className="hover:text-gray-900 text-slate-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/product"
              className="text-slate-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Product
            </Link>
            <Link
              to="#pricing"
              className="text-slate-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-slate-400 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-900 text-slate-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={closeMenu}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
