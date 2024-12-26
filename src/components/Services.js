
import React from "react";

const Services = () => {
  const services = [
    { title: "E-Waste Recycling", description: "Safe and secure recycling for all types of e-waste." },
    { title: "ITAD Solutions", description: "Secure data destruction and asset recovery." },
    { title: "CSR Initiatives", description: "Join hands in redeveloping lakes and creating impact." },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded">
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
    