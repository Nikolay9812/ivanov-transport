import React from "react";

export default function OurService() {
  return (
    <div className="flex items-center justify-center py-16 px-4 md:px-0 relative">
      <img
        src="/public/img/form-background.jpg"
        alt="form-background"
        className="h-full w-full absolute top-0 left-0 object-cover -z-50"
      />
      <div className="bg-white px-6 py-6 md:px-16 md:py-6 rounded-lg">
        <div className="py-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-light">
            Professional Services
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            Get your transport quote
          </h1>
        </div>
        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="mb-5">
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Location
            </label>
            <input
              type="text"
              id="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Location"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="destination"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Destination
            </label>
            <input
              type="text"
              id="destination"
              placeholder="To destination"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="cargo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Cargo/Person
            </label>
            <input
              type="text"
              id="cargo"
              placeholder="Cargo/Person"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Contact number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mt-3 col-span-1">
            <button
              type="submit"
              className="mt-4 h-fit uppercase text-white bg-first-color hover:bg-firstcolor-alt focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get a Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
