import React from "react";

export default function AboutFourthSection() {
  return (
    <div className="min-h-screen  flex flex-col md:flex-row relative">
      <div className="relative w-full md:w-1/1 flex flex-col items-center justify-center">
        <div className="z-50 bg-white py-20 text-center px-4 md:text-start md:pr-20 ">
          <h4 className="text-xl md:text-2xl lg:text-3xl mb-4">
            Reliable and On-Time Delivery of Your Goods
          </h4>
          <div className="flex flex-col gap-10">
            <p className="text-base md:text-xl text-gray-400 ">
              At our company, we prioritize the safe and on-time delivery of
              your goods. Our efficient logistics system ensures that your
              shipments reach their destination securely and promptly.
            </p>
            <p className="text-base md:text-xl text-gray-400 mb-4">
              We understand the importance of reliability in logistics. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <a
              href="#"
              className="uppercase inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-first-color rounded-lg hover:bg-first-color-alt focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/1 h-64 md:h-auto md:py-[150px] p-16 bg-white md:-ml-20 lg:-ml-32 xl:-ml-40 shadow-lg">
        <img
          src="/img/our-service-next.jpg"
          alt="Our Service"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
