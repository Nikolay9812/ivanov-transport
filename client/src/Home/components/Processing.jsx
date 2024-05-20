import React from "react";

export default function Processing() {
  return (
    <div className=" flex flex-col items-center justify-start py-16 h-auto lg:h-[70vh]">
      <div className="title text-center leading-[3.5rem]">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-medium tracking-[0.02rem] text-first-color">
          Professional Process
        </h2>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium tracking-[0.02rem]">
          Three step{" "}
          <span className="font-extrabold tracking-[0.03rem]">processing</span>
        </h1>
      </div>
      <div className="cards flex flex-col lg:flex-row items-center justify-center lg:h-[500px] gap-6 mt-8">
        <div className="card flex flex-col items-start gap-6 p-6 bg-white border border-gray-200 rounded-lg shadow-md w-full lg:min-w-[500px]">
          <div className="flex items-center">
              <h1 className="text-7xl text-gray-200 tracking-[0.04rem]">01.</h1>
          </div>
          <h3 className="text-xl font-medium tracking-[0.02rem] text-gray-900">
            Morbi porttitor justo arcu, et fringilla nunc gravida sit amet.
          </h3>
          <p className="text-lg font-medium tracking-[0.02rem] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit eiusmod
            tempor incididunt ut et dolore magna aliqua enim veniam numquam
            eius.
          </p>
        </div>
        <div className="card flex flex-col items-start gap-6 p-6 bg-white border border-gray-200 rounded-lg shadow-md w-full lg:min-w-[500px]">
          <div className="flex items-center"> 
            <h1 className="text-7xl text-gray-200 tracking-[0.04rem]">02.</h1>
          </div>
          <h3 className="text-xl font-medium tracking-[0.02rem] text-gray-900">
            Phasellus posuere aliquam ornare in commodo pellentesque.
          </h3>
          <p className="text-lg font-medium tracking-[0.02rem] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit eiusmod
            tempor incididunt ut et dolore magna aliqua enim veniam numquam
            eius.
          </p>
        </div>
        <div className="card flex flex-col items-start gap-6 p-6 bg-white border border-gray-200 rounded-lg shadow-md w-full lg:min-w-[500px]">
          <div className="flex items-center"> 
            <h1 className="text-7xl text-gray-200 tracking-[0.04rem]">03.</h1>
          </div>
          <h3 className="text-xl font-medium tracking-[0.02rem] text-gray-900">
            Aliquam elementum nulla sed lorem turpis eleifend quis.
          </h3>
          <p className="text-lg font-medium tracking-[0.02rem] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit eiusmod
            tempor incididunt ut et dolore magna aliqua enim veniam numquam
            eius.
          </p>
        </div>
      </div>
    </div>
  );
}
