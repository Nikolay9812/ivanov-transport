import React from "react";

export default function AboutSecondSection() {
  return (
    <div className="min-h-screen py-20 flex flex-col md:flex-row relative">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="/img/our-service-next.jpg"
          alt="Our Service"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full md:w-1/2 flex items-center">
        <div className="relative md:py-[150px] p-16 bg-white md:-ml-20 lg:-ml-32 xl:-ml-40 shadow-lg">
          <h4 className="text-xl md:text-2xl lg:text-3xl">
            Our Company Core Values
          </h4>
          <div>
            <p className="text-base md:text-lg text-gray-400 my-4">
              At our company, we are dedicated to fostering a culture of
              innovation, integrity, and excellence. Our core values drive us
              to deliver exceptional service and build long-lasting
              relationships with our clients.
            </p>
            <p className="text-base md:text-lg text-gray-400">
              We believe in the power of teamwork and collaboration. Our team is
              committed to working together to achieve common goals and create
              value for our stakeholders. We strive to maintain the highest
              ethical standards and act with transparency and accountability in
              everything we do.
            </p>
            <div className="flex justify-start gap-40 my-8">
              <div className="">
                <p className="font-bold">John Doe</p>
                <p className="text-base md:text-lg text-gray-400">
                  Chief Executive Officer
                </p>
              </div>
              <div className="">
                <img src="/img/signature.jpg" alt="John Doe's signature" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
