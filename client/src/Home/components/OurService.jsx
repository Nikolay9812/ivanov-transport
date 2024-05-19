import React from "react";

export default function OurService() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-0">
      <form class="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
        <div class="mb-5">
          <label
            for="location"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Your Location
          </label>
          <input
            type="text"
            id="location"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="location"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="destination"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Destination
          </label>
          <input
            type="text"
            id="destination"
            placeholder="to destination"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="cargo"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Cargo/Person
          </label>
          <input
            type="text"
            id="destination"
            placeholder="cargo/person"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="e-mail"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Phone Number
          </label>
          <input
            type="text"
            id="phone"
            placeholder="contact number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="mt-7 h-fit uppercase text-white bg-first-color hover:bg-firstcolor-alt focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          get aquote
        </button>
      </form>
    </div>
  );
}
