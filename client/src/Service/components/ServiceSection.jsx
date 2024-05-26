import React from "react";
import { Link } from "react-router-dom";

export default function ServiceSection() {
  const serviceList = [
    {
      name: "Storage",
      path: "/services?tab=storage",
      src: "/img/service1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis aliquet purus non elementum. Nam quis vulputate enim, congue ullamcorper risus.",
    },
    {
      name: "Logistic",
      path: "/services?tab=logistic",
      src: "/img/service2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis aliquet purus non elementum. Nam quis vulputate enim, congue ullamcorper risus.",
    },
    {
      name: "Tow Service",
      path: "/services?tab=tow-service",
      src: "/img/service3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis aliquet purus non elementum. Nam quis vulputate enim, congue ullamcorper risus.",
    },
    {
      name: "Passenger Transport",
      path: "/services?tab=passenger-transport",
      src: "/img/service4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis aliquet purus non elementum. Nam quis vulputate enim, congue ullamcorper risus.",
    },
    {
      name: "Vehicle Service",
      path: "/services?tab=vehicle-service",
      src: "/img/service5.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis aliquet purus non elementum. Nam quis vulputate enim, congue ullamcorper risus.",
    },
    {
      name: "Transport",
      path: "/services?tab=transport",
      src: "/img/service6.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis aliquet purus non elementum. Nam quis vulputate enim, congue ullamcorper risus.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center py-10">
      {serviceList.map((service, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 mx-11 sm:m-0">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={service.path}>
              <img className="rounded-t-lg" src={service.src} alt="" />
            </Link>
            <div className="p-5">
              <Link to={service.path}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {service.description}
              </p>
              <Link to={service.path} className="uppercase transition duration-300 hover:text-first-color">
                More Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
