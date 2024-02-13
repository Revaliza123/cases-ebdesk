import React from 'react'
import logof from "../assets/logof.svg";
import insta from "../assets/Instagram.svg";
import twt from "../assets/Twitter.svg";
import fcb from "../assets/Facebook.svg";

export default function footer() {
  return (
    <footer className="bg-gray-200 py-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center md:justify-items-start">
      <div className="text-center md:text-left">
        <div className="flex justify-center md:justify-center items-center mb-2">
          <div>
            <img
              src={logof}
              alt="Geolabs Logo"
              className="w-14 h-8 mr-2 md:items-center"
            />
          </div>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-gray-800 md:items-center">
              GEOLABS
            </h3>
          </div>
        </div>
        <div className="flex justify-center md:justify-start items-center lg:ms-20 mt-5 md:ms-20 md:items-center">
          <p className="text-gray-600 font-sans">
            <span className="font-bold">Geolabs</span> is a private virtual
            network that has unique features and has high security.
          </p>
        </div>
        <div className="flex justify-center md:justify-start items-center lg:ms-20 md:ms-20 mt-3 md:items-center">
          <img src={fcb} alt="Twitter Icon" className="w-14 rounded-full" />
          <img src={twt} alt="Tiktok Icon" className="w-14 rounded-full" />
          <img
            src={insta}
            alt="Instagram Icon"
            className="w-14 rounded-full"
          />
        </div>
        <p className="text-slate-500 text-center md:text-left md:items-center lg:ms-20 md:ms-20">
          @2020EBDESK
        </p>
      </div>
      <div className="md:mx-28">
        <h2 className="text-lg font-bold mb-4">Product</h2>
        <ul className="space-y-1 font-sans">
          <li>
            <a href="#" className="hover:underline">
              Download
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Location
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Server
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Countries
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="md:mx-28">
        <h2 className="text-lg font-bold mb-4">Company</h2>
        <ul className="space-y-1 font-sans">
          <li>
            <a href="#" className="hover:underline">
              Geolabs?
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Tutorials
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
      <div className="md:mx-28">
        <h2 className="text-lg font-bold mb-4">Earn Money</h2>
        <ul className="space-y-1 font-sans">
          <li>
            <a href="#" className="hover:underline">
              Affiliate
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Become Partner
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}
