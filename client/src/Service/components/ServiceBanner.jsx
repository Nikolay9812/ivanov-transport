// ServiceBanner.js
import React from "react";
import { Link } from "react-router-dom";

export default function ServiceBanner({ imgSrc, title, breadcrumbs }) {
  return (
    <div
      className="parallax"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="parallax-content text-white py-10 px-4 mx-auto w-full max-w-[1280px]">
        <div>
          <h1 className="uppercase text-xl lg:text-6xl mb-2">{title}</h1>
          <p>
            {breadcrumbs.map((breadcrumb, index) => (
              <span key={index}>
                <Link
                  to={breadcrumb.path}
                  className="transition-colors duration-300 hover:text-first-color"
                >
                  {breadcrumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && " / "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
