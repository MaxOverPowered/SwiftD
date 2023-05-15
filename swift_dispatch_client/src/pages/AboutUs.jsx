import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { SiReact } from "react-icons/si";
import Logo from "../company_Icon/new/logo_swift_FINAL.png";
import ReactPlayer from "react-player";

const AboutUs = () => {
    return (
        <div className="py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                        <img src={Logo} alt="Company Logo" className="w-full max-w-xs mx-auto"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 md:pl-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">About Our Company</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Swift Dispatch, we're more than just a logistics company. We're
                            a team of passionate car-hauling experts who love making our clients
                            smile. With over 2 years of experience in the industry, we know
                            America like the back of our hand, and we pride ourselves on our
                            ability to efficiently and effectively dispatch our drivers to
                            their destinations. We like our work because we love money, but we
                            love our clients even more.
                        </p>
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-gray-600 mr-2"/>
                            <p className="text-gray-700">Serving all of America</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FiTruck className="text-gray-600 mr-2"/>
                            <p className="text-gray-700">  Experienced drivers and top-of-the-line equipment to make your
                                car-hauling experience a breeze 🚚</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="relative mx-auto">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=d1GlSl0pcF0"
                        className="absolute top-0 left-0 w-full h-full"
                        controls={true}
                    />
                </div>
            </div>


        </div>
        );
};

export default AboutUs;