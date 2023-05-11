import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import ContactUsCard from "../components/ContactUsCard";

const ContactUs = () => {
  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
          <div className="flex items-center justify-center mb-4">
            <FaEnvelope className="text-gray-600 mr-2" />
            <p className="text-gray-700">swift.dispatch.info@gmail.com</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/swiftdispatchcompany/"
                className="text-gray-600 hover:text-purple-600 px-3 py-2 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={
                    "inline-flex items-center px-6 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs uppercase tracking-widest "
                  }
                >
                  <FaFacebook className="text-xl" />
                  <span className="ml-2">Facebook</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/swift.dispatch.company/"
                className="text-gray-600 hover:text-purple-600 px-3 py-2 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={
                    "inline-flex items-center px-6 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs uppercase tracking-widest "
                  }
                >
                  <FaInstagram className="text-xl" />
                  <span className="ml-2">Instagram</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactUsCard showExitButton={false} />
    </div>
  );
};

export default ContactUs;
