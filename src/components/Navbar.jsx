import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-primary text-secondary p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo dan Judul */}
        <div className="flex items-center space-x-3">
          <img
            src="./image/payung negeri.png"
            alt="Logo"
            className="h-8 w-8 md:h-10 md:w-10"
          />
          <div className="flex flex-col">
            <h1 className="">Institut Kesehatan Payung Negeri (IKESPN)</h1>
            <span className="">Pekanbaru</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          <Link
            to="/"
            className=" md:hover:text-gray-500 hover:bg-primary md:hover:bg-transparent hover:text-white px-2 py-2 rounded-lg transition duration-200 ">
            Beranda
          </Link>
          <Link
            to="/calculator"
            className=" md:hover:text-gray-500 hover:bg-primary md:hover:bg-transparent hover:text-white px-2 py-2 rounded-lg transition duration-200">
            SRAS
          </Link>
          <Link
            to="/result"
            className=" md:hover:text-gray-500 hover:bg-primary md:hover:bg-transparent hover:text-white px-2 py-2 rounded-lg transition duration-200">
            Hasil
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="p-2 focus:outline-none"
            onClick={() => {
              const navLinks = document.getElementById("mobile-menu");
              navLinks.classList.toggle("hidden");
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        id="mobile-menu"
        className="md:hidden hidden mt-4 space-y-2 text-sm bg-secondary outline outline-primary p-4 rounded-lg">
        <Link
          to="/"
          className="block  md:hover:text-gray-500 hover:bg-primary md:hover:bg-transparent text-primary hover:text-white px-2 py-2 rounded-lg transition duration-200">
          Beranda
        </Link>
        <Link
          to="/calculator"
          className="block  md:hover:text-gray-500 hover:bg-primary md:hover:bg-transparent text-primary hover:text-white px-2 py-2 rounded-lg transition duration-200">
          SRAS
        </Link>
        <Link
          to="/result"
          className="block  md:hover:text-gray-500 hover:bg-primary md:hover:bg-transparent text-primary hover:text-white px-2 py-2 rounded-lg transition duration-200">
          Hasil
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
