import React from "react";
import { Link } from "react-router-dom";

export default function AbouthBanner() {
  return (
    <div className="h-[70vh] relative flex items-end">
      <img
        src="/img/vehicle-banner.jpg"
        alt="banner"
        className="absolute top-0 left-0 w-full h-full object-cover -z-50"
      />

      <div className="text-white py-10 px-4 mx-auto w-[1280px]">
        <h1 className="uppercase text-xl lg:text-4xl">Abouth Us</h1>
        <p>
          <Link
            to="/"
            className="transition-colors duration-300 hover:text-first-color"
          >
            Home
          </Link>{" "}
          / About Us
        </p>
      </div>
    </div>
  );
}
