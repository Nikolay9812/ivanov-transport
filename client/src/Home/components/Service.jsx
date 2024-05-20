import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Service() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="text-center p-6">
        <h2 className="text-first-color text-2xl md:text-3xl lg:text-4xl">
          Our service
        </h2>
        <h1 className="text-xl md:text-3xl lg:text-4xl">
          The complete <span className="font-bold">solution</span>
        </h1>
      </div>
      <div className="px-6 h-[50vh]">
        <Slider {...settings}>
          <div className="relative px-2 h-full group">
            <img
              src="https://via.placeholder.com/800x400?text=Service+1"
              alt="Service 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black scale-[0.97] rounded-lg bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute left-0 bottom-0 p-4 md:p-10">
                <h3 className="text-lg sm:text-xl">Service 1</h3>
                <p className="text-sm sm:text-lg">Description of service 1</p>
              </div>
            </div>
          </div>
          <div className="relative px-2 h-full group">
            <img
              src="https://via.placeholder.com/800x400?text=Service+2"
              alt="Service 2"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black scale-[0.97] bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute left-0 bottom-0 p-4 md:p-10">
                <h3 className="text-lg sm:text-xl">Service 2</h3>
                <p className="text-sm sm:text-lg">Description of service 2</p>
              </div>
            </div>
          </div>
          <div className="relative px-2 h-full group">
            <img
              src="https://via.placeholder.com/800x400?text=Service+3"
              alt="Service 3"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black scale-[0.97] bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute left-0 bottom-0 p-4 md:p-10">
                <h3 className="text-lg sm:text-xl">Service 3</h3>
                <p className="text-sm sm:text-lg">Description of service 3</p>
              </div>
            </div>
          </div>
          <div className="relative px-2 h-full group">
            <img
              src="https://via.placeholder.com/800x400?text=Service+4"
              alt="Service 4"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black scale-[0.97] bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute left-0 bottom-0 p-4 md:p-10">
                <h3 className="text-lg sm:text-xl">Service 4</h3>
                <p className="text-sm sm:text-lg">Description of service 4</p>
              </div>
            </div>
          </div>
          <div className="relative px-2 h-full group">
            <img
              src="https://via.placeholder.com/800x400?text=Service+5"
              alt="Service 5"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black scale-[0.97] bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute left-0 bottom-0 p-4 md:p-10">
                <h3 className="text-lg sm:text-xl">Service 5</h3>
                <p className="text-sm sm:text-lg">Description of service 5</p>
              </div>
            </div>
          </div>
          <div className="relative px-2 h-full group">
            <img
              src="https://via.placeholder.com/800x400?text=Service+6"
              alt="Service 6"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black scale-[0.97] bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute left-0 bottom-0 p-4 md:p-10">
                <h3 className="text-lg sm:text-xl">Service 6</h3>
                <p className="text-sm sm:text-lg">Description of service 6</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="text-center p-6">
        <a href="#" className="text-gray-600">
          View all services
        </a>
      </div>
    </div>
  );
}
