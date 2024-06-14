import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function News() {
  return (
    <div className="py-10">
      <div className="text-center p-6">
        <h2 className="text-first-color text-2xl md:text-3xl lg:text-4xl">
          Welcome to Professional Warehousing
        </h2>
        <h1 className="text-xl md:text-3xl lg:text-4xl">
          Tailored Warehouse <span className="font-bold">Solutions</span> for Every Need
        </h1>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center gap-6 mx-auto py-10 text-md">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Top-Notch Service Quality
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            We ensure the highest quality services for your peace of mind.
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
              Precise Handling of Valuable Goods
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            We handle your valuable goods with utmost care and attention.
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
              Secure and Timely Delivery
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            We ensure safe and on-time delivery of your goods to their destination.
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
