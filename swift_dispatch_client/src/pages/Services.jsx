import React from "react";
import { Card } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import caHaulerImage from "../company_Icon/new/1.png";
import accountingImage from "../company_Icon/new/4.png";
import logImage from "../company_Icon/new/3.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import text_element from "../company_Icon/new/text_element.png";

const services = [
  {
    title: "Car hauling dispatch service",
    price: " %",
    features: [
      "First load on us 😊",
      "2+ years dispatch🎧",
      "Best possible rates on the route  💰",
      "Good Communication 📞",
      "Keep company healthy🌟",
      "Appointment at pickup and delivery 📅",
    ],
    backgroundImage: caHaulerImage,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  {
    title: "Billing & Accounting",
    price: "from " + 149 + " $",
    features: [
      "Documentation",
      "Submitting the necessary documents to the broker/factoring company to receive payment for the shipments.",
      "Resolving issues that may result from delayed payment reception.",
      "Tracking the receipt of payments",
    ],
    backgroundImage: accountingImage,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  {
    title: "Logbook",
    price: "from " + 199 + " $",
    features: [
      "Route optimization",
      "We've successfully managed to ensure compliance with HOS regulations for years, even before drivers used electronic logs. Trust our expert team to ensure your drivers always follow the latest HOS rules.",
    ],
    backgroundImage: logImage,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
];

const ServiceCard = ({ service, onClick }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    onClick();
    navigate("/contact");
  };

  return (
    <Card className="flex flex-col justify-between h-full rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
      <div className="bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-6 rounded-t-lg">
        <h3 className="text-3xl font-extrabold text-white mb-4">
          {service.title}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-xl text-gray-200">{service.price}</span>
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-pink-400 py-2 px-4 rounded-full text-lg font-semibold text-white hover:from-pink-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
      <div className="bg-gray-100 p-4 flex-1 font-sans">
        <ul className="text-gray-800 font-medium">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start mb-2">
              <FaCheck className="mr-2 mt-1 text-green-500 text-xl flex-shrink-0" />
              <span className="align-self-start">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

const ServicePage = () => {
  const handleContactClick = () => {
    // Handle contact button click
  };

  return (
    <div>
      <div className="bg-white">
        {/* <img
          src={text_element}
          className="mx-auto h-40 sm:h-48 lg:h-56 xl:h-64"
        /> */}
      </div>
      <h1 className="text-center text-gray-800 text-3xl font-bold mt-4 mb-8 font-sans">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5 mx-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            onClick={handleContactClick}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
