import React from "react";

export default function ServiceAbout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="/public/img/our-service-next.jpg"
          alt="Our Service"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full md:w-1/2 flex items-center">
        <div className="relative md:py-[150px] p-16 bg-white md:-ml-20 lg:-ml-32 xl:-ml-40 shadow-lg">
          <h4 className="text-2xl md:text-4xl lg:text-5xl">
            Safe and on time delivery of your goods dolor sit amet
          </h4>
          <div className="my-4">
            <p className="text-base md:text-lg text-gray-400">
              Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut
              labore et dolore magna aliqua ad minim veniam, quis nostrud
              exercitation. Lorem <u>ipsum</u> dolor sit amet adipisicing
              eiusmod tempor elementum ut labore et dolore.
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
