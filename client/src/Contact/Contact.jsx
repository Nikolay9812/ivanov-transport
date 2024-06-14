import React from "react";
import ContactMap from "../components/ContactMap";
import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <ContactBanner />
          <div className="max-w-screen-xl m-auto">
              <ContactForm/>
        <ContactMap />
      </div>
    </>
  );
}
