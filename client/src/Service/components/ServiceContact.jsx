import React from "react";
import ContactMap from "../../components/ContactMap";

export default function ServiceContact() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center">
      <div className="text-center w-[700px] px-6">
        <h4 className="text-xl md:text-2xl lg:text-3xl">
          Contact Us for Reliable Logistics Services
        </h4>
        <p className="text-base md:text-lg text-gray-400 my-4">
          Whether you're looking to streamline your supply chain or need secure storage solutions, we're here to help.
        </p>
        <a
          href="#"
          className="uppercase inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-first-color rounded-lg hover:bg-first-color-alt focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get a Quote
        </a>
      </div>
      <ContactMap />
    </div>
  );
}
