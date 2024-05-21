import React from "react";
import VehicleBanner from "./components/VehicleBanner";
import VehicleAbout from "./components/VehicleAbout";
import VehicleIsotopeGallery from "./components/VehicleIsotopeGallery";
import VehicleContact from "./components/VehicleContact";

export default function VehicleFleet() {
  return (
    <>
      <VehicleBanner />
          <VehicleIsotopeGallery />
          <VehicleAbout />
          <VehicleContact/>
    </>
  );
}
