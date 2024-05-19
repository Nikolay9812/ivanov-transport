import React from 'react';

export default function Processing() {
  return (
    <div className="h-screen flex">
      <div className="flex-1 relative">

      <img src="/public/img/our-service-next.jpg" alt="" className='-z-50 absolute top-0 left-0' />
      </div>
      <div className="flex-1 relative mr-16">
        <div className="absolute top-0 right-0 p-16">
          <h4 className="text-2xl md:text-4xl lg:text-5xl">Safe and on time delivery of your goods dolor sit amet</h4>
          <div className="my-4">
            <p className="text-base md:text-lg">Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation. Lorem <u>ipsum</u> dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore.</p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <h5 className="text-base md:text-lg">Lorem ipsum dolor</h5>
              <p className="text-base md:text-lg">Lorem ipsum dolor sit adipisicing eiusmod tempor ut labore et dolore.</p>
              <button className="btn btn-sm style-4 mt-4" id="custom-id-3">More Info</button>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <h5 className="text-base md:text-lg">Lorem ipsum dolor</h5>
              <p className="text-base md:text-lg">Lorem ipsum dolor sit adipisicing eiusmod tempor ut labore et dolore.</p>
              <button className="btn btn-sm style-4 mt-4" id="custom-id-4">More Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
