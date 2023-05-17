import React, { useState } from "react";
import ContactUsCard from "./ContactUsCard";
import truck_element from "../company_Icon/new/truck_element.png";
import text_element from "../company_Icon/new/text_element.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ApplyNowSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { t, i18n } = useTranslation();

  const cardText = [
    {
      needDispatch: t("applyNowSection.needDispatch"),
      rightPlace: t("applyNowSection.rightPlace"),
      text1: t("applyNowSection.text1"),
      text2: t("applyNowSection.text2"),
      contactUs: t("applyNowSection.contactus"),
    },
  ];

  const handleContactClick = () => {
    window.scrollTo({ top: 2, behavior: "smooth" });
    setShowContactForm(true);
    document.body.classList.add("no-scroll"); // Add this line to disable scrolling
  };

  const handleFormClose = () => {
    setShowContactForm(false);
    document.body.classList.remove("no-scroll"); // Add this line to re-enable scrolling
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
          {cardText.map((element) => (
            <div>
              <motion.h1
                className="text-green-900 text-4xl sm:text-5xl lg:text-7xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                data-scroll
              >
                {t("applyNowSection.needDispatch")}
              </motion.h1>
              <motion.h2
                className="text-green-900 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                data-scroll
              >
                {element.rightPlace}
              </motion.h2>
              <motion.p
                className="text-green-900 text-base sm:text-lg lg:text-xl xl:text-2xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                data-scroll
              >
                {element.text1}
                <br /> {element.text2}
              </motion.p>
              <motion.button
                className="bg-white py-3 px-6 rounded-full text-lg font-bold text-gray-900 hover:bg-gray-300 hover:text-gray-900 transition-opacity duration-300 ease-in-out opacity-80 mb-1"
                onClick={handleContactClick}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                style={{ opacity: 0.8 }}
                data-scroll
              >
                Contact Us
              </motion.button>
            </div>
          ))}
        </div>
      ) : (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            className="bg-white p-8 md:p-10 lg:p-12 rounded-lg shadow-md relative"
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: "0%" }}
            exit={{ opacity: 0, translateY: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-0 right-0 p-2 focus:outline-none"
              onClick={handleFormClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ContactUsCard onClose={handleFormClose} showExitButton={true} />
          </motion.div>
        </div>
      )}
      ) }
    </section>
  );
};

export default ApplyNowSection;
