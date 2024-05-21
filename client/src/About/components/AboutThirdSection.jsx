import React from "react";

export default function AboutThirdSection() {
  const teamMembers = [
    {
      name: "John Top",
      position: "CEO",
      src: "/img/team1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Paul King",
      position: "Dispatching",
      src: "/img/team2.jpg",
      description: "Praesent mattis aliquet purus non elementum.",
    },
    {
      name: "George Road",
      position: "Driver Manager",
      src: "/img/team3.jpg",
      description: "Nam quis vulputate enim, congue ullamcorper risus.",
    },
    {
      name: "John Stors",
      position: "Warehouse Manager",
      src: "/img/team4.jpg",
      description: "Aenean condimentum, nisi a eleifend aliquet.",
    },
  ];
  return (
    <div className="py-10">
      <div className=" text-start">
        <h2 className="text-first-color text-2xl md:text-3xl lg:text-4xl">
          Professional Team
        </h2>
        <h1 className="text-xl md:text-3xl lg:text-4xl">
          Meet our <span className="font-bold">dedicated</span> team
        </h1>
      </div>
      <div className="flex flex-wrap justify-center py-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 p-2 overflow-hidden"
          >
            <div className="relative group">
              <img
                src={member.src}
                alt={member.name}
                className="w-full h-auto transform transition-transform duration-300 group-hover:-translate-y-1/2"
              />
              <div className="absolute  bg-opacity-50 p-4 text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:-translate-y-1/2">
                <p className="mb-4">{member.description}</p>
              </div>
              <div className=" text-center py-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
