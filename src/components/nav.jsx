import React, { useState } from "react";
import { Link } from "react-router-dom";
import logof from "../assets/Vector.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container bg-transparent top-0 z-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500   transition duration-150 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
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
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="hidden lg:block h-8 w-auto"
                  src={logof}
                  alt="Logo"
                  
                />
                <span className="hidden lg:block text-white ml-2 font-semibold">
                  Logoipsum
                </span>
              </div>
              <div className="hidden md:flex md:items-center md:ml-6">
                <div className="flex items-end justify-center space-x-4">
                  <Link
                  to="/"
                  className="hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/product"
                  className="hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Product
                </Link>
                <Link
                  to="#pricing"
                  className="hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/about"
                  className="hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/login"
              className="whitespace-nowrap text-base font-medium text-white hover:text-gray-900 mr-4"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="whitespace-nowrap text-base font-medium text-white hover:text-gray-900 mr-4 hover:bg-white border border-white rounded-full px-7 py-2"
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
                  className="hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/product"
                  className="hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Product
                </Link>
                <Link
                  to="#pricing"
                  className="hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/about"
                  className="hover:text-black text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
