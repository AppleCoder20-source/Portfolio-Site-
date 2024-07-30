import React from "react";

const services = [
  {
    id: 1,
    title: "Tech Fellow @ CodePath",
    description: "Teaching Data Structures and Algorithms to over 40+ students",
  },
  {
    id: 2,
    title: "Software Engineer Intern @ Queens Library ",
    description: "Automated database using RPA software, saved staff over 10-30 hours weekly",
  },
  {
    id: 3,
    title: "Software Engineering Fellow @ HeadStarter",
    description: "Fellowship to learn about React,NextJS, OpenAI, build 5 awesome projects!!",
  },
  {
    id: 4,
    title: "Software Engineering Mentee @ Google",
    description: "Selected for a highly competitive 10 week intensive 1:1 mentorship from a Google Software Engineer, outperforming 350+ applicants to be among 80 participants to further develop problem solving skills.",
  },
];
const Experience = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;