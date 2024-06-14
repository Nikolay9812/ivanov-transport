import React from "react";

export default function ServiceAbout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="/img/our-service-next.jpg"
          alt="Our Service"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full md:w-1/2 flex items-center">
        <div className="relative md:py-[150px] p-16 bg-white md:-ml-20 lg:-ml-32 xl:-ml-40 shadow-lg">
          <h4 className="text-2xl md:text-4xl lg:text-5xl">
            Safe and on time delivery of your goods
          </h4>
          <div className="my-4">
            <p className="text-base md:text-lg text-gray-400">
              We prioritize the safe and punctual delivery of your goods. Our
              commitment to quality ensures that each shipment arrives on time
              and intact, giving you peace of mind throughout the process. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h5 className="text-base md:text-lg">Lorem ipsum dolor</h5>
              <p className="text-base md:text-lg text-gray-400">
                Lorem ipsum dolor sit adipisicing eiusmod tempor ut labore et
                dolore.
              </p>
              <button className="btn btn-sm style-4 mt-4 transition-colors duration-300 hover:text-first-color">
                More Info
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <h5 className="text-base md:text-lg">Lorem ipsum dolor</h5>
              <p className="text-base md:text-lg text-gray-400">
                Lorem ipsum dolor sit adipisicing eiusmod tempor ut labore et
                dolore.
              </p>
              <button
                className="btn btn-sm style-4 mt-4 transition-colors duration-300 hover:text-first-color"
                id="custom-id-4"
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
