import React from "react";
import Banner from "./components/Banner";
import IsotopeGallery from "./components/IsotopeGallery";
import VehicleAbout from "./components/VehicleAbout";
import VehicleContact from "./components/VehicleContact";

export default function VehicleFleet() {
  return (
    <>
      <Banner />
          <IsotopeGallery />
          <VehicleAbout />
          <VehicleContact/>
    </>
  );
}
