import React, { useEffect, useState } from "react";
import ServiceContact from "./components/ServiceContact";
import Navigation from "./components/Navigation";
import ServiceBanner from "./components/ServiceBanner";
import Logistic from "./components/Logistic";
import PassengerTransport from "./components/PassengerTransport";
import TowServices from "./components/TowServices";
import VehicleService from "./components/VehicleService";
import Transport from "./components/Transport";
import ServiceSection from "./components/ServiceSection";
import { useLocation } from "react-router-dom";
import NavStorage from "./components/NavStorage";

export default function Services() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    } else {
      setTab("");
    }
  }, [location.search]);

  const getBannerProps = () => {
    let imgSrc = "/img/vehicle-banner.jpg";
    let title = "Services";
    let breadcrumbs = [
      { label: "Home", path: "/" },
      { label: "Services", path: "/services" }
    ];

    if (tab) {
      title = tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ");
      breadcrumbs.push({ label: title, path: `/services?tab=${tab}` });

      // Set different images based on the tab
      switch (tab) {
        case "storage":
          imgSrc = "/img/storage-banner.jpg";
          break;
        case "logistic":
          imgSrc = "/img/logistic-banner.jpg";
          break;
        case "passenger-transport":
          imgSrc = "/img/passenger-transport-banner.jpg";
          break;
        case "tow-service":
          imgSrc = "/img/tow-service-banner.jpg";
          break;
        case "vehicle-service":
          imgSrc = "/img/vehicle-service-banner.jpg";
          break;
        case "transport":
          imgSrc = "/img/transport-banner.jpg";
          break;
        default:
          imgSrc = "/img/vehicle-banner.jpg";
          break;
      }
    }

    return { imgSrc, title, breadcrumbs };
  };

  const bannerProps = getBannerProps();

  return (
    <div>
      <ServiceBanner {...bannerProps} />
      <div className="min-h-screen flex flex-col md:flex-row max-w-screen-xl m-auto">
        {tab === "" && <ServiceSection />}
        {tab === "storage" && <NavStorage />}
        {tab === "logistic" && <Logistic />}
        {tab === "passenger-transport" && <PassengerTransport />}
        {tab === "tow-service" && <TowServices />}
        {tab === "vehicle-service" && <VehicleService />}
        {tab === "transport" && <Transport />}
        {tab && (
          <div>
            <Navigation />
          </div>
        )}
      </div>
      <ServiceContact />
    </div>
  );
}
