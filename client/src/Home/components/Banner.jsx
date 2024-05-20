import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      <img
        src="/img/banner.png"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <div className="relative flex items-center justify-center w-full max-w-[1200px]">
        <div className="h-[500px] text-left flex-1 p-8 z-50">
          <h1 className="mb-4 text-4xl font-extralight leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Professional Delivery
          </h1>
          <h1 className="uppercase mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Ivanov Transport
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-800 lg:text-xl dark:text-gray-400">
            We make your cargo transport simple.
          </p>
          <a
            href="#"
            className="uppercase inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-first-color rounded-lg hover:bg-first-color-alt focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            get a quote
            <FaArrowRight className="w-3.5 h-3.5 ml-2 rtl:rotate-180" />
          </a>
        </div>
        <div className="absolute top-0 left-0 ml-0 sm:ml-[300px] w-[700px] flex items-center justify-center sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
          <img
            src="/img/sprinter.png"
            alt="sprinter"
            className="w-full h-auto max-w-screen-sm sm:max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
