import React from "react";

export default function AboutSecondSection() {
  return (
    <div className="min-h-screen py-20 flex flex-col md:flex-row relative">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="/img/our-service-next.jpg"
          alt="Our Service"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full md:w-1/2 flex items-center">
        <div className="relative md:py-[150px] p-16 bg-white md:-ml-20 lg:-ml-32 xl:-ml-40 shadow-lg">
          <h4 className="text-xl md:text-2xl lg:text-3xl">
            Our company core values
          </h4>
          <div>
            <p className="text-base md:text-lg text-gray-400 my-4">
              Sit amet adipisicing eiusmod tempor elementum ut labore et dolore
              magna aliqua ad minim veniam, quis nostrud exercitation.
            </p>
            <p className="text-base md:text-lg text-gray-400">
              Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut
              labore et dolore magna aliqua ad minim veniam, quis nostrud
              exercitation. Lorem ipsum dolor sit amet adipisicing eiusmod
              tempor elementum ut labore et dolore.
            </p>
            <div className="flex justify-start gap-40 my-8">
              <div className="">
                <p className=" font-bold">John Doe</p>
                <p className="text-base md:text-lg text-gray-400">
                  Chief Executive Officer
                </p>
              </div>
              <div className=""><img src="/img/signature.jpg" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
