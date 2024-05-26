import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const ListItem = ({ to, currentTab, tabName, children }) => (
  <li>
    <Link
      to={to}
      className={`block p-2 ${
        currentTab === tabName
          ? "text-first-color"
          : "text-gray-400 transition duration-300 hover:text-first-color"
      }`}
    >
      <div className="border-b border-gray-300 pb-2 md:w-[300px] w-full flex justify-between items-center">
        <p>{children}</p>
        <MdOutlineKeyboardArrowRight />
      </div>
    </Link>
  </li>
);

const FileLink = ({ fileName }) => (
  <div className="border border-gray-300 transition duration-300 hover:border-gray-400 text-gray-400 flex w-full md:w-[300px] cursor-pointer group mb-3">
    <div className="border-r p-3 flex items-center transition duration-300 group-hover:border-gray-400">
      <FaRegFilePdf />
    </div>
    <div className="flex items-center justify-between w-full p-3">
      <h2 className="uppercase">{fileName}</h2>
      <MdOutlineKeyboardArrowDown />
    </div>
  </div>
);

const Navigation = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const currentTab = urlParams.get("tab") || "all-services";

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <h2 className="m-2 text-xl">Navigation</h2>
        <ul className="flex flex-col">
          <ListItem to="/services" currentTab={currentTab} tabName="all-services">
            All Services
          </ListItem>
          <ListItem to="/services?tab=storage" currentTab={currentTab} tabName="storage">
            Storage
          </ListItem>
          <ListItem to="/services?tab=logistic" currentTab={currentTab} tabName="logistic">
            Logistic
          </ListItem>
          <ListItem to="/services?tab=passenger-transport" currentTab={currentTab} tabName="passenger-transport">
            Passenger Transport
          </ListItem>
          <ListItem to="/services?tab=tow-service" currentTab={currentTab} tabName="tow-service">
            Tow Service
          </ListItem>
          <ListItem to="/services?tab=vehicle-service" currentTab={currentTab} tabName="vehicle-service">
            Vehicle Service
          </ListItem>
          <ListItem to="/services?tab=transport" currentTab={currentTab} tabName="transport">
            Transport
          </ListItem>
        </ul>
      </nav>
      <div className="flex flex-col justify-center items-center space-y-3">
        <FileLink fileName="Vehicle-list.pdf" />
        <FileLink fileName="Catalogue.pdf" />
      </div>
    </div>
  );
};

export default Navigation;
