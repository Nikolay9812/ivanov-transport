import React from "react";
import { IoIosCheckbox } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function AboutFirstSection() {
  return (
    <div className="flex flex-wrap py-10">
      <div className="flex flex-col justify-end w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <h2 className="text-3xl mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum labore
          et dolore magna aliqua ad minim veniam, nostrud quis cing eiusmod
          tempor elementum ut labore.
        </p>
        <div className="flex items-center">
          <MdOutlineKeyboardArrowRight className="text-2xl" />
          <a
            href="#"
            className="transition-colors duration-300 hover:text-first-color"
          >
            More Details
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-end w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <h2 className="text-3xl mb-4">Our Vision</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum labore
          et dolore magna aliqua ad minim veniam, nostrud quis cing eiusmod
          tempor elementum ut labore.
        </p>
        <div className="flex items-center">
          <MdOutlineKeyboardArrowRight className="text-2xl" />
          <a
            href="#"
            className="transition-colors duration-300 hover:text-first-color"
          >
            More Details
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/3 p-4 border-8 border-slate-100">
        <h2 className="text-xl text-gray-500">Professional Services</h2>
        <h3 className="text-4xl mb-8">24 Hours Support</h3>
        <ul className="text-gray-600">
          <li className="mb-2 flex items-center gap-1">
            <IoIosCheckbox /> Magna risus vehi augue
          </li>
          <li className="mb-2 flex items-center gap-1">
            <IoIosCheckbox /> Facilisis magna risus
          </li>
          <li className="mb-2 flex items-center gap-1">
            <IoIosCheckbox /> Dolor sit ametconse ctetur
          </li>
          <li className="mb-2 flex items-center gap-1">
            <IoIosCheckbox /> Ametconse ctetur adipis
          </li>
          <li className="mb-2 flex items-center gap-1">
            <IoIosCheckbox /> Facilisis magna risus
          </li>
        </ul>
      </div>
    </div>
  );
}
