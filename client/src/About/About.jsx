import React from "react";
import AbouthBanner from "./components/AboutBanner";
import AboutFirstSection from "./components/AboutFirstSection";
import ContactMap from "../components/ContactMap";
import AboutSecondSection from "./components/AboutSecondSection";
import AboutThirdSection from "./components/AboutThirdSection";
import AboutFourthSection from "./components/AboutFourthSection";

export default function About() {
  return (
    <>
      <AbouthBanner />
      <div className="max-w-screen-xl m-auto">
        <AboutFirstSection />
        <AboutSecondSection />
        <AboutThirdSection />
        <AboutFourthSection/>
        <ContactMap />
      </div>
    </>
  );
}
