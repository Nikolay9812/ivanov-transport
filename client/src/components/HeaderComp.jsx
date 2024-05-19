import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

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
        headerBg ? "bg-white shadow-lg" : "bg-transparent"
      } border-gray-200 dark:bg-gray-900`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-md">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-first-color via-first-color to-first-color-alt rounded transition-colors-lg text-white">
            Ivanov
          </span>
          Transport
        </Link>
        <LanguageSelector />
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="uppercase flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/"
                    ? "text-first-color border-b-2 border-first-color"
                    : "text-gray-800 hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/vehicle-fleet"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/vehicle-fleet"
                    ? "text-first-color border-b-2 border-first-color"
                    : "text-gray-700 hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={
                  location.pathname === "/vehicle-fleet" ? "page" : undefined
                }
              >
                Vehicle Fleet
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/service"
                    ? "text-first-color border-b-2 border-first-color"
                    : "text-gray-700 hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={
                  location.pathname === "/service" ? "page" : undefined
                }
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/about"
                    ? "text-first-color border-b-2 border-first-color"
                    : "text-gray-700 hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={
                  location.pathname === "/about" ? "page" : undefined
                }
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/news"
                    ? "text-first-color border-b-2 border-first-color"
                    : "text-gray-700 hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={
                  location.pathname === "/news" ? "page" : undefined
                }
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/shop"
                    ? "text-first-color border-b-2 border-first-color"
                    : "text-gray-700 hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={
                  location.pathname === "/shop" ? "page" : undefined
                }
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 rounded transition-colors ${
                  location.pathname === "/contact"
                    ? "text-first-color border-b-2 border-first-color"
                    : "text-gray-700 hover:border-b-2 hover:text-first-color border-first-color dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={
                  location.pathname === "/contact" ? "page" : undefined
                }
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
