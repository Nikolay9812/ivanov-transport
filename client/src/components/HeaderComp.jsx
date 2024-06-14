import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import LanguageSelector from "./LanguageSelector"; // Import the LanguageSelector component

export default function HeaderComp() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-[1000] transition-colors duration-300 ${
        headerBg ? "bg-gray-500 bg-opacity-50 shadow-lg" : "bg-transparent"
      } border-gray-200 dark:bg-gray-900 text-white`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-md">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-first-color via-first-color to-first-color-alt rounded transition-colors-lg text-white">
            Ivanov
          </span>
          Transport
        </Link>
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="w-5 h-5" />
          </button>
        </div>
        <div className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="uppercase flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-sm">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/"
                    ? "text-first-color border-b-2 border-first-color"
                    : "hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/vehicle-fleet"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/vehicle-fleet"
                    ? "text-first-color border-b-2 border-first-color"
                    : "hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={location.pathname === "/vehicle-fleet" ? "page" : undefined}
              >
                Vehicle Fleet
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/services"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/services"
                    ? "text-first-color border-b-2 border-first-color"
                    : "hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={location.pathname === "/services" ? "page" : undefined}
              >
                Services
              </Link>
              <ul className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-full md:mt-2 md:w-40 md:bg-white border border-gray-200 rounded shadow-lg md:hidden group-hover:block group-focus-within:block transition-all duration-300 ease-in-out md:opacity-0 group-hover:md:opacity-100 group-focus-within:md:opacity-100 md:translate-y-2 group-hover:md:translate-y-0 group-focus-within:md:translate-y-0">
                <li>
                  <Link to="/services?tab=transport" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Transport
                  </Link>
                </li>
                <li>
                  <Link to="/services?tab=logistic" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Logistic
                  </Link>
                </li>
                <li>
                  <Link to="/services?tab=tow-service" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Tow Service
                  </Link>
                </li>
                <li>
                  <Link to="/services?tab=passenger-transport" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Passenger Transport
                  </Link>
                </li>
                <li>
                  <Link to="/services?tab=vehicle-service" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Vehicle Service
                  </Link>
                </li>
                <li>
                  <Link to="/services?tab=storage" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Storage
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/about"
                    ? "text-first-color border-b-2 border-first-color"
                    : "hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={location.pathname === "/about" ? "page" : undefined}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/contact"
                    ? "text-first-color border-b-2 border-first-color"
                    : "hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={location.pathname === "/contact" ? "page" : undefined}
              >
                Contact us
              </Link>
            </li>
            <li>
              <LanguageSelector /> {/* Use LanguageSelector component */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
