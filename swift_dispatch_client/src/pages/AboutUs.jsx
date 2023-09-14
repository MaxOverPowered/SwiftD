import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import {useTranslation} from "react-i18next";
import truckIcon from "../company_Icon/new/truck_element.png";
import "../components/language/resurse";import Logo from "../company_Icon/new/logo_swift_FINAL.png";
import ReactPlayer from "react-player";

const AboutUs = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center text-center">
          <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              About us <br/><br/>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ textIndent: '3em' , whiteSpace: 'pre-line'}}>
              {t("aboutUs.description")}
            </p>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-gray-600 mr-2" />
              <p className="text-gray-700">United States of America 🇺🇸
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-8">
        <div className="max-w-6xl">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=d1GlSl0pcF0"
            controls={true}
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
