import React, { useState } from "react";
import ContactUsCard from "./ContactUsCard";
import truck_element from "../company_Icon/new/truck_element.png";
import text_element from "../company_Icon/new/text_element.png";
import { motion } from "framer-motion";

const ApplyNowSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    window.scrollTo({ top: 2, behavior: "smooth" });
    setShowContactForm(true);
  };

  const handleFormClose = () => {
    setShowContactForm(false);
  };

  return (
    <section
      className="relative pt-16 lg:pt-24 w-full"
      style={{ backgroundColor: "#FFFFFF" }}
      data-scroll-container
    >
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: `url(${truck_element})` }}
      />
      {!showContactForm ? (
        <div className="z-10 text-center mt-40 lg:mt-52 xl:mt-60 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-green-900 text-4xl sm:text-5xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            data-scroll
          >
            DO YOU NEED DISPATCHING?
          </motion.h1>
          <motion.h2
            className="text-green-900 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            data-scroll
          >
            You have come to the right place!
          </motion.h2>
          <motion.p
            className="text-green-900 text-base sm:text-lg lg:text-xl xl:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            data-scroll
          >
            We can help you find amazing loads and good routes, fully
            coordinating the carrier’s movement from point A to point B.
            <br /> Let’s get along and make money together!
          </motion.p>
          <motion.button
            className="bg-white py-3 px-6 rounded-full text-lg font-bold text-gray-900 hover:bg-gray-300 hover:text-gray-900 transition-opacity duration-300 ease-in-out opacity-80"
            onClick={handleContactClick}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            style={{ opacity: 0.8 }}
            data-scroll
          >
            Contact Us
          </motion.button>
          <img
            src={text_element}
            className="mx-auto h-40 sm:h-48 lg:h-56 xl:h-64"
          />
        </div>
      ) : (
        <div
          className="contact-form-container slide-in opacity-75 bg-black"
          onSubmit={handleFormClose}
        >
          <ContactUsCard onClose={handleFormClose} showExitButton={true} />
        </div>
      )}
    </section>
  );
};

export default ApplyNowSection;
