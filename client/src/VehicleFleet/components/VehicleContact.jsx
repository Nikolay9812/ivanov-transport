import React from "react";

export default function VehicleContact() {
  return (
    <div className="max-w-screen-xl m-auto flex flex-col justify-center items-center">
      <div className="text-center w-[700px] px-6">
        <h4 className="text-xl md:text-2xl lg:text-3xl">
          Safe and on time delivery
        </h4>
        <p className="text-base md:text-lg text-gray-400 my-4">
          Sit amet adipisicing eiusmod tempor elementum ut labore et dolore
          magna aliqua ad minim veniam, quis nostrud exercitation.
        </p>
        <a
          href="#"
          className="uppercase inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-first-color rounded-lg hover:bg-first-color-alt focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          get a quote
        </a>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.563455359491!2d8.524236077180877!3d49.41716067141351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c858ad2081c9%3A0xebfccbf320aa889f!2sHalmhuberstra%C3%9Fe%2C%2068219%20Rheinau!5e0!3m2!1sbg!2sde!4v1716242730281!5m2!1sbg!2sde"
        className="w-full h-[500px] mt-10"
      ></iframe>
    </div>
  );
}
