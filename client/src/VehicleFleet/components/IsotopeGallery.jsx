// IsotopeGallery.js
import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

export default function IsotopeGallery() {
  const imageData = [
    { id: 1, title: "Image 1", category: "All", src: "/public/img/car1.png" },
    {
      id: 2,
      title: "Image 2",
      category: "Short trucks",
      src: "/public/img/car2.jpg",
    },
    {
      id: 3,
      title: "Image 3",
      category: "Prime trucks",
      src: "/public/img/car3.jpg",
    },
    { id: 4, title: "Image 4", category: "Vans", src: "/public/img/car4.png" },
    {
      id: 5,
      title: "Image 5",
      category: "Prime trucks",
      src: "/public/img/car5.png",
    },
    {
      id: 6,
      title: "Image 6",
      category: "Big load trucks",
      src: "/public/img/car6.png",
    },
    {
      id: 7,
      title: "Image 7",
      category: "Big load trucks",
      src: "/public/img/car7.png",
    },
    {
      id: 8,
      title: "Image 8",
      category: "Big load trucks",
      src: "/public/img/car8.png",
    },
    {
      id: 9,
      title: "Image 9",
      category: "Big load trucks",
      src: "/public/img/car9.png",
    },
  ];

  const [filterKey, setFilterKey] = useState("*");
  const isotope = useRef();

  useEffect(() => {
    isotope.current = new Isotope(".grid", {
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
    });

    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: "*" })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <div className="mx-auto max-w-screen-xl px-3">
      <div className="flex justify-start my-8 border-[0.1rem] border-gray-200">
        <button
          onClick={handleFilterKeyChange("*")}
          className={`p-4 border-r-[0.1rem] border-gray-200 transition duration-300 hover:bg-gray-100 ${
            filterKey === "*" ? "bg-gray-100 text-first-color-alt" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={handleFilterKeyChange("Shorttrucks")}
          className={`p-4 border-r-[0.1rem] border-gray-200 transition duration-300 hover:bg-gray-100 ${
            filterKey === "Shorttrucks"
              ? "bg-gray-100 text-first-color-alt"
              : ""
          }`}
        >
          Short trucks
        </button>
        <button
          onClick={handleFilterKeyChange("Primetrucks")}
          className={`p-4 border-r-[0.1rem] border-gray-200 transition duration-300 hover:bg-gray-100 ${
            filterKey === "Primetrucks"
              ? "bg-gray-100 text-first-color-alt"
              : ""
          }`}
        >
          Prime trucks
        </button>
        <button
          onClick={handleFilterKeyChange("Vans")}
          className={`p-4 border-r-[0.1rem] border-gray-200 transition duration-300 hover:bg-gray-100 ${
            filterKey === "Vans" ? "bg-gray-100 text-first-color-alt" : ""
          }`}
        >
          Vans
        </button>
        <button
          onClick={handleFilterKeyChange("Bigloadtrucks")}
          className={`p-4 border-r-[0.1rem] border-gray-200 transition duration-300 hover:bg-gray-100 ${
            filterKey === "Bigloadtrucks"
              ? "bg-gray-100 text-first-color-alt"
              : ""
          }`}
        >
          Big load trucks
        </button>
      </div>

      <div className="grid">
        {imageData.map((image) => (
          <div
            key={image.id}
            className={`grid-item ${image.category.replace(/ /g, "")}`}
            style={{
              // width: window.innerWidth >= 640 ? 'calc(1230px / 3)' : '470px',
              width: "calc(1200px / 3)",
              height: "400px",
              margin: "0.5rem",
            }}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-end items-start p-10 transition-opacity duration-300">
              <h3 className="text-white mb-4">{image.title}</h3>
              <button className="px-4 py-2 bg-first-color-alt text-white rounded">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
