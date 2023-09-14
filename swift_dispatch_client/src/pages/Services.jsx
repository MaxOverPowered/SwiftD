import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import caHaulerImage from "../company_Icon/new/1.png";
import accountingImage from "../company_Icon/new/4.png";
import logImage from "../company_Icon/new/3.png";

const services = [
  {
    title: "DISPATCH SERVICE",
    price: "Starting with 7% fee",
    features: [
      "Best possible rates on the route\n",
      "Rate negotiation\n",
      "Loads and routes planning\n",
      "Appointments for pick up and delivery\n",
      "Carrier packet setups\n",
      "Customer support\n",
    ],
    backgroundImage: caHaulerImage,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  {
    title: "BILLING & ACCOUNTING",
    price: `Starting with 200 $/month`,
    features: [
      "Documentation",
      "Invoicing & submitting necessary documents/paperwork",
      "Tracking the receipt of payments",
      "Monitoring delayed payment reception",
    ],
    backgroundImage: accountingImage,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  {
    title: "Logbook",
    price: `Starting with 11c9 $/month`,
    features: [
      "Route optimization ",
      "Compliance with HOS regulations",
    ],
    backgroundImage: logImage,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
];

const ServicePage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
      <div>
        <h1 className="text-center text-gray-800 text-2xl sm:text-3xl font-bold mt-4 mb-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-5 mx-4">
          {services.map((service, index) => (
              <div
                  key={index}
                  className="rounded-lg overflow-hidden bg-gray-100"
              >
                <div
                    className="bg-gradient-to-r from-green-600 to-green-500 px-4 py-6 rounded-t-lg"
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white mb-4">
                    {service.title}
                  </h3>
                  <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg lg:text-xl text-gray-200">
                  {service.price}
                </span>
                    <button
                        className="bg-white py-3 px-6 rounded-full text-lg font-bold text-gray-900 hover:bg-gray-300 hover:text-gray-900 transition-opacity duration-300 ease-in-out opacity-80 mb-1"
                        onClick={handleContactClick}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="p-4 font-sans text-gray-800">
                  <ul className="text-sm sm:text-base">
                    {service.features.map((feature, featureIndex) => (
                        <li
                            key={featureIndex}
                            className="flex items-start mb-2"
                        >
                          <FaCheck className="mr-2 mt-1 text-green-500 text-lg sm:text-xl flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}

export default ServicePage;
