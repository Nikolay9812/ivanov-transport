import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function News() {
  return (
    <div className="py-10">
      <div className="text-center p-6">
        <h2 className="text-first-color text-2xl md:text-3xl lg:text-4xl">
          Professional Warehouse
        </h2>
        <h1 className="text-xl md:text-3xl lg:text-4xl">
          Warehouse <span className="font-bold">solution</span> for every need
        </h1>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center gap-6 mx-auto py-10 text-md">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-first-color rounded-lg hover:bg-first-color-alt focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <FaArrowRight className="w-3.5 h-3.5 ms-2 rtl:rotate-180" />
          </a>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-first-color rounded-lg hover:bg-first-color-alt focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <FaArrowRight className="w-3.5 h-3.5 ms-2 rtl:rotate-180" />
          </a>
        </div>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-first-color rounded-lg hover:bg-first-color-alt focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <FaArrowRight className="w-3.5 h-3.5 ms-2 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
}
