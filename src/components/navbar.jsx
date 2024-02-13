import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/profil.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faMoon, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignOut = () => {
    // Tambahkan logika untuk sign out di sini
    console.log("Signing out...");
    // You may add additional logic for sign out here
  };

  const handleProfileClick = () => {
    // Tambahkan logika untuk menampilkan profil di sini
    console.log("Viewing profile...");
    // You may add additional logic for displaying profile here
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdownOnOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeDropdownOnOutsideClick);
    };
  }, []);

  return (
    <div className="bg-white h-16 text-black flex items-center justify-between p-4">
      {/* Icon Hamburger di Bagian Kiri */}
      <div className="flex items-center">
        <FontAwesomeIcon icon={faHamburger} className="mr-2 w-10" />
      </div>

      {/* Foto Profil dan Menu di Bagian Kanan */}
      <div
        className="flex items-center relative"
        ref={dropdownRef}
        onClick={toggleDropdown}
      >
        {/* Foto Profil */}
      <FontAwesomeIcon icon={faMoon} className="text-gray-500 mr-4" />
        <div className="w-8 h-8 rounded-md overflow-hidden cursor-pointer">
          <img
            src={logo}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text "user.inc" */}
        <span className="ml-2">user.inc</span>

        {/* Dropdown Content */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-28 bg-white border rounded shadow-md overflow-hidden">
            <button
              className="block px-4 py-2 text-gray-700 hover:text-black w-full text-left"
              onClick={() => {
                handleSignOut();
                toggleDropdown();
              }}
            >
              SignOut
            </button>
            <button
              className="block px-4 py-2 text-gray-700 hover:text-black w-full text-left"
              onClick={() => {
                handleProfileClick();
                toggleDropdown();
              }}
            >
              Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
